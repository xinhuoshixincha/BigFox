from . import db
from datetime import datetime
# 利用此包对密码进行加密
from werkzeug.security import generate_password_hash, check_password_hash


class Permissions:
    """权限

    attribute LIKE 点赞权限
    attribute FOLLOW 关注权限
    attribute COMMENT 评论权限
    attribute UPLOAD 上传视频、文章权限
    attribute DELETE 删除视频文章权限
    attribute DELETE_OTHER 删除其他用户视频文章权限
    attribute MODIFY_USER 修改普通用户资料权限
    attribute SUPER_ADMIN 修改管理员用户资料权限
    """
    LIKE = 1
    FOLLOW = 2
    COMMENT = 4
    UPLOAD = 8
    DELETE = 16
    DELETE_OTHER = 32
    MODIFY_USER = 64
    MODIFY_ADMIN = 128


class Roles(db.Model):
    """用户身份"""
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False, index=True)
    name = db.Column(db.String(64), unique=True)
    default = db.Column(db.Boolean, default=False, index=True)
    permissions = db.Column(db.Integer)
    user = db.relationship('Users', backref='role', lazy='dynamic')

    def __init__(self, **kwargs):
        """在未给构造函数提供参数时，把permissions字段的值设为0

        :param kwargs:参数
        """
        super(Roles, self).__init__(**kwargs)
        if self.permissions is None:
            self.permissions = 0

    def __repr__(self):
        return '<Role %r>' % self.name

    def has_permission(self, perm):
        """检查是否包含权限perm

        :param perm: 要检查的是否已经存在的权限
        :return:包含返回True，不包含返回False
        """
        return self.permissions & perm == perm

    def add_permission(self, perm):
        """ 添加权限

        :param perm:要添加的权限
        """
        if not self.has_permission(perm):
            self.permissions += perm

    def remove_permission(self, perm):
        """删除权限

        :param perm:要删除的权限
        """
        if self.has_permission(perm):
            self.permissions -= perm

    def reset_permission(self):
        """重置权限"""
        self.permissions = 0

    @staticmethod
    def insert_roles():
        """向数据库中插入几个角色"""
        roles = {
            'User': [],
            'AuthenticatedUser': [Permissions.LIKE, Permissions.FOLLOW, Permissions.COMMENT, Permissions.UPLOAD,
                                  Permissions.DELETE],
            'Admin': [Permissions.LIKE, Permissions.FOLLOW, Permissions.COMMENT, Permissions.UPLOAD, Permissions.DELETE,
                      Permissions.DELETE_OTHER, Permissions.MODIFY_USER],
            'SuperAdmin': [Permissions.LIKE, Permissions.FOLLOW, Permissions.COMMENT, Permissions.UPLOAD,
                           Permissions.DELETE,
                           Permissions.DELETE_OTHER, Permissions.MODIFY_USER, Permissions.MODIFY_ADMIN],
        }
        default_role = 'User'
        for r in roles:
            role = Roles.query.filter_by(name=r).first()
            if role is None:
                role = Roles(name=r)
            role.reset_permission()
            for perm in roles[r]:
                role.add_permission(perm)
            role.default = (role.name == default_role)
            db.session.add(role)
        db.session.commit()


class Follows(db.Model):
    __table_name__ = 'follows'
    follower_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True)
    followed_id = db.Column(db.Integer, db.ForeignKey("users.id"), primary_key=True)
    create_time = db.Column(db.DateTime(), default=datetime.utcnow(), index=True)


# todo：用户表模型
class Users(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, autoincrement=True, primary_key=True, nullable=False, index=True)
    username = db.Column(db.String(64), nullable=False, index=True)
    __password_hash = db.Column(db.String(128), nullable=False)
    description = db.Column(db.String(512), nullable=True)
    email = db.Column(db.String(64), unique=True, nullable=False, index=True)
    registration_time = db.Column(db.DateTime, default=datetime.utcnow, index=True)
    avatar_url = db.Column(db.String(256), nullable=False, default="/static/avatar/default")

    likes = db.Column(db.Integer, default=0, index=True)
    fans = db.Column(db.Integer, default=0, index=True)
    followed = db.relationship('Follows', foreign_keys=[Follows.follower_id],
                               backref=db.backref('follower', lazy='joined'),
                               lazy='dynamic', cascade='all, delete-orphan')
    follower = db.relationship('Follows', foreign_keys=[Follows.followed_id],
                               backref=db.backref('followed', lazy='joined'),
                               lazy='dynamic', cascade='all, delete-orphan')

    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))

    # 真实姓名
    real_name = db.Column(db.String(64), nullable=True, unique=True)
    # 身份证号
    real_id = db.Column(db.String(18), nullable=True, unique=True)
    # 真实学校
    real_school = db.Column(db.String(64), nullable=True)
    # 专业
    real_profession = db.Column(db.String(64), nullable=True)
    # 学校邮箱
    real_school_email = db.Column(db.String(64), nullable=True, unique=True)
    # 学信网材料链接
    student_status_info = db.Column(db.String(64), nullable=True, unique=True)
    # 是否认证成功
    school_confirmed = db.Column(db.Boolean, default=False)
    # 认证方式 0代表学校邮箱认证，1代表提交学信网信息认证
    confirm_type = db.Column(db.Integer, default=0, nullable=False)

    def __init__(self, **kwargs):
        super(Users, self).__init__(**kwargs)
        # 如果没有传入身份，则将身份设置为roles表中
        if self.role_id is None:
            self.role_id = Roles.query.filter_by(default=True).first().id
        self.fans_number = self.follower.count()
        self.followed_number = self.followed.count()

    def __repr__(self):
        return "<user %r>" % self.username

    @property
    def password(self):
        """为Users类添加一个password属性，当直接用User.password访问时抛出错误"""
        raise AttributeError("密码不可见")

    @password.setter
    def password(self, password):
        """
        Users类的属性password的默认构造器，可以直接通过Users类的对象.password=xxx来设置密码，
        并将密码加密后保存在私有属性(同时也是数据库users表中的密码字段)__password_hash中
        :param password: 要设置的密码
        """

        # 使用generate_password_hash对密码进行加密
        self.__password_hash = generate_password_hash(password)

    def verify_password(self, password):
        """
        验证密码是否正确，从数据库中取得__password_hash和password做比对
        :param password:要验证的密码
        :return:密码是否正确
        """
        return check_password_hash(self.__password_hash, password)

    def change_password(self, new_password):
        """
        修改密码
        :param new_password:新的密码
        """
        self.__password_hash = generate_password_hash(new_password)

    def can(self, perm):
        """
        检查用户是否有perm权限
        :param perm:要检查的权限
        """
        role = Roles.query.filter_by(id=self.role_id).first()
        return role is None and role.has_permission(perm)

    def is_admin(self):
        """
        检查用户是否是管理员
        """
        return self.can(Permissions.DELETE_OTHER) & self.can(Permissions.MODIFY_USER)

    def is_super_admin(self):
        """
        是否是超级管理员
        """
        return self.can(Permissions.MODIFY_ADMIN)

    def is_following(self, user):
        """
        当前用户是否关注了user
        :param user:要检查的用户
        :return:当前用户是否关注了用户user
        """
        if user is None:
            return False
        return self.followed.filter_by(followed_id=user.id).first() is not None

    def is_followed(self, user):
        """
        检查是否被user关注(粉丝列表中是否有user)
        :param user: 要检查的用户
        :return: 当前用户是否被user关注
        """
        if user is None:
            return False
        return self.follower.filter_by(follower_id=user.id).first() is not None

    def follow(self, user):
        """
        关注用户
        :param user:要关注的用户
        """
        if not self.is_following(user):
            f = Follows(follower_id=self.id, followed_id=user.id, create_time=datetime.utcnow())
            db.session.add(f)
            db.session.commit()
            self.likes += 1
            user.fans += 1

    def unfollow(self, user):
        """
        取消关注用户
        :param user:要取关的用户
        """
        if self.is_following(user):
            f = self.followed.filter_by(followed_id=user.id).first()
            if f:
                db.session.delete(f)
                db.session.commit()
                self.likes -= 1
                user.fans -= 1

# todo：视频表模型


# todo：文章表


# todo：视频评论表


# todo：文章评论表

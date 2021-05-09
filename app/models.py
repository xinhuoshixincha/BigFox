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
            'User': [Permissions.LIKE, Permissions.FOLLOW, Permissions.COMMENT, Permissions.UPLOAD, Permissions.DELETE],
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

    def __init__(self, **kwargs):
        super(Users, self).__init__(**kwargs)
        # 如果没有传入身份，则将身份设置为roles表中
        if self.role_id is None:
            self.role_id = Roles.query.filter_by(default=True).first().id
        self.fans_number = self.follower.count()
        self.followed_number = self.followed.count()

    def __repr__(self):
        return "<user >"

# todo：用户间关注与被关注表


# todo：视频表模型


# todo：文章表


# todo：视频评论表


# todo：文章评论表

from .. import api
from ...email import send_email
from flask import request, jsonify
import filetype
import os
from ....config import Config, basedir, apiBasedir
import time
from ...models import Users
from ... import redis_client
import chardet
from ...email import validate_email
from ... import db
from ...uploadFile import upload_file


@api.route('/v1/users/register', methods=['POST'])
def register():
    """
        @api {POST} /api/v1/users/register 注册用户
        @apiName 注册用户
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        注册新用户

        @apiHeader {String=multipart/form-data,application/x-www-form-urlencoded} Content-Type 浏览器编码类型


        @apiParam {String='1-64位'} username 用户名
        @apiParam {String='6-18位'} password 密码
        @apiParam {String='0-512位'} [description] 个人简介
        @apiParam {String='邮箱'} email 邮箱
        @apiParam {File} avatar 头像
        @apiParam {String} emailVerifyCode 邮箱验证码

        @apiUse Success200
        @apiSuccess {String} data.email 刚注册用户的邮箱
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "email":"4546@qq.com"
            }
        }

        @apiUse Errors

        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse ParamValueError
        @apiUse ResourceUploadFailed
        @apiUse ResourceTypeError
        @apiErrorExample {json} 邮箱已被使用
        {
            "result":false,
            "code":403,
            "message":"邮箱已被使用",
            "header":{},
            "data":{}
        }
        @apiErrorExample {json} 邮箱格式不正确
        {
            "result":false,
            "code":403,
            "message":"邮箱格式不正确",
            "header":{},
            "data":{}
        }
        @apiErrorExample {json} 邮箱验证码错误
        {
            "result": false,
            "code": 403,
            "message":"邮箱验证码错误",
            "header":{},
            "data":{}
        }
    """
    all_form_data = request.form
    username = all_form_data.get("username")
    password = all_form_data.get("password")
    description = all_form_data.get("description")
    email = all_form_data.get("email")
    avatar_dict = request.files.to_dict()
    email_verify_code = all_form_data.get("emailVerifyCode")
    path = None
    avatar_response = None

    # 缺少参数值
    if username is None or password is None or email is None or email_verify_code is None:
        return jsonify(result=False, code=400, message='缺少参数值!', header={}, data={}), 400
    # 参数值类型错误
    if type(username) != str or type(password) != str or type(email) != str or type(email_verify_code) != str:
        return jsonify(result=False, code=400, message="参数类型错误!", header={}, data={}), 400
    if description is not None:
        if type(description) != str:
            return jsonify(result=False, code=400, message="参数类型错误!", header={}, data={}), 400
    if (username.__len__() < 1 or username.__len__() > 64) or (password.__len__() < 6 or password.__len__() > 18):
        return jsonify(result=False, code=400, message="参数值错误!", header={}, data={}), 400
    # 邮箱已被使用
    if Users.query.filter_by(email=email).first() is not None:
        return jsonify(result=False, code=403, message='邮箱已被使用', header={}, data={}), 403
    # 邮箱验证码认证失败
    redis_email_code_bin = redis_client.get(email + Config.REDIS_USER_FILED_ONE)
    if redis_email_code_bin is not None:
        redis_email_code = str(redis_email_code_bin, encoding=chardet.detect(redis_email_code_bin)["encoding"])
        if redis_email_code != email_verify_code:
            return jsonify(result=False, code=403, message="邮箱验证码错误", header={}, data={}), 403
    else:
        return jsonify(result=False, code=403, message="邮箱验证码错误", header={}, data={}), 403
    # 邮箱格式错误
    if not validate_email(email):
        return jsonify(result=False, code=403, message="邮箱格式不正确", header={}, data={}), 403
    # 上传头像文件
    for file_name in avatar_dict:
        # 获得头像文件
        avatar = avatar_dict[file_name]
        avatar_response = upload_file(avatar, "avatar", Config.IMAGE_ALLOWED_TYPE)
        if avatar_response.get('result') is not None:
            return jsonify(result=avatar_response['result'], code=avatar_response['code'],
                           message=avatar_response['message'], header=avatar_response['header'],
                           data=avatar_response['data'])

    user = Users()
    user.username = username
    user.password = password
    user.description = description
    user.email = email
    user.avatar_url = avatar_response.get("url")
    db.session.add(user)
    db.session.commit()
    return jsonify(result=True, code=200, message="", header={}, data={"email": email}), 200


@api.route('/v1/users/login', methods=['POST'])
def login():
    """
        @api {POST} /api/v1/users/login 登录
        @apiName 登录
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        登录

        @apiHeader {String=application/json} Content-Type 浏览器编码类型

        @apiParam {String} email 邮箱
        @apiParam {String} password 密码
        @apiParamExample {json} 参数示例
        {
            "email":"邮箱",
            "password":"asdasfasdasd"
        }

        @apiUse Success200
        @apiSuccess {String} header.Authorization 用户认证令牌
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{
                "Authorization":"jdlafhqpjdlaljsdlk"
            },
            "data":{}
        }

        @apiUse Errors
        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse UserNotFound

        @apiErrorExample {json} 账号或密码错误
        {
            "result":false,
            "code":403,
            "message":"账号或密码错误",
            "header":{},
            "data":{}
        }
    """
    data = request.get_json()
    if data is not None:
        email = data.get("email")
        password = data.get("password")
    else:
        return jsonify(result=False, code=403, message="请传入正确的json格式", header={}, data={})
    user = None

    # 判断是否缺少参数值
    if email is None or password is None:
        return jsonify(result=False, code=400, message="缺少参数值", header={}, data={})
    # 判断类型错误
    if type(email) is not str or type(password) is not str:
        return jsonify(result=False, code=400, message="参数类型错误!", header={}, data={})
    # 判断是否是邮箱格式
    if not validate_email(email):
        return jsonify(result=False, code=403, message="邮箱格式错误", header={}, data={})

    # 判断邮箱对应的用户是否存在
    user = Users.query.filter_by(email=email).first()
    if user is None:
        return jsonify(result=False, code=404, message="用户未找到", header={}, data={})
    # 判断邮箱密码是否匹配
    if not user.verify_password(password):
        return jsonify(result=False, code=403, message="账号或密码错误", header={}, data={})

    token = user.get_authorization()
    return jsonify(result=True, code=200, message="", header={"Authorization": token}, data={})


@api.route('/v1/users/user', methods=['GET'])
def get_user_info():
    """
        @api {GET} /api/v1/users/user 获取用户信息
        @apiName 获取用户信息
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        传入用户id获取用户的信息

        @apiHeader {String=application/json} Content-Type 浏览器编码类型

        @apiParam {Number} userId 用户编号
        @apiParamExample {json} 参数示例
        {
            "userId":1
        }

        @apiUse Success200
        @apiSuccess {String} data.username 用户名
        @apiSuccess {String} data.description 个人简介
        @apiSuccess {String} data.avatarUrl 头像链接
        @apiSuccess {Number} data.attentionNumber 关注数
        @apiSuccess {Number} data.fansNumber 粉丝数
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "username":"user1",
                "description":"Hello World!",
                "avatarUrl":"http://xxx",
                "attentionNumber":120,
                "fansNumber":5
            }
        }

        @apiUse Errors
        @apiUse UserNotFound
        @apiUse ParamNeed
        @apiUse ParamTypeError
    """
    pass


@api.route('/v1/users/users', methods=['GET'])
def get_users():
    """
        @api {GET} /api/v1/users/users 获取多个用户
        @apiName 获取多个用户
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        根据传入的条件获取多个用户的信息

        @apiHeader {application/json} Content-Type 浏览器编码类型


        @apiParam {String={1-64位}} [searchValue=""] 搜索内容
        @apiParam {Number={大于等于-1}} [usersNumber="-1 所有用户"] 要查询的用户数
        @apiParam {String="fans-粉丝数","registrationTime-注册时间","relativity-相关度"} [order="fans"] 排序方式
        @apiParam {Boolean} [isPagination=false] 是否分页
        @apiParam {Number={大于等于1}} [pageNumber=1] 页码
        @apiParam {Number={大于等于1}} [pageSize=1] 每页大小

        @apiParamExample {json} 搜索
        {
            "searchValue":"搜索",
            "order":"relativity"
        }
        @apiParamExample {json} 所有用户
        {
            "userName":-1 #此句可以省略
        }
        @apiParamExample {json} 被点赞数前十的用户
        {
            "userNumber":10,
            "order":"fans" #此句可以省略
        }
        @apiParamExample {json} 取分页第一页，每页5个元素
        {
            "isPagination":true,
            "pageNumber":1,
            "pageSize":5
        }

        @apiUse Success200
        @apiSuccess {Object[]} data.users 用户
        @apiSuccess {String} data.users.username 用户名
        @apiSuccess {String} data.users.description 个人简介
        @apiSuccess {String} data.users.avatarUrl 头像链接
        @apiSuccess {Number} data.users.attentionNumber 关注数
        @apiSuccess {Number} data.users.fansNumber 粉丝数
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "users":[
                    {
                        "username":"user1",
                        "description":"简介",
                        "avatarUrl":"https://xxx",
                        "attentionNumber":10,
                        "fansNumber":1
                    },
                    {...}
                ]
            }
        }

        @apiUse Errors
        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse ParamValueError
    """
    pass


@api.route('/v1/users/login', methods=['GET'])
def get_login_status():
    """
        @api {GET} /api/v1/users/login 获取用户的登录状态
        @apiName 获取用户的登录状态
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        验证用户是否登录
        
        @apiHeader {String=application/json} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌
        
        @apiParam {Number} userId 当前用户的用户编号
        @apiParamExample {json} 参数示例
        {
            "userId":1
        }

        @apiUse Success200
        @apiSuccess {Boolean} data.isLogin 是否登录
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
               "isLogin":true
            }
        }

        @apiUse Errors
        @apiUse ParamNeed
        @apiUse UserNotFound
        @apiUse ParamTypeError
        @apiUse LoginExpired
        @apiUse AuthorizationError
    """
    pass


@api.route('/v1/users/user', methods=['DELETE'])
def delete_user():
    """
        @api {DELETE} /api/v1/users/user 删除用户
        @apiName 删除用户
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        传入用户编号来删除用户
        普通用户仅可以删除自己，管理员用户可以删除其他用户
        
        @apiHeader {String=application/json} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌
        
        @apiParam {Number} userId 要删除的用户的编号

        @apiParamExample {json} 参数示例
        {
            "userId":1
        }

        @apiUse Success204

        @apiUse Errors
        @apiUse CompetenceError
        @apiUse UserNotFound
        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse LoginExpired
        @apiUse AuthorizationError
    """
    pass


@api.route('/v1/users/user', methods=['PUT'])
def update_user():
    """
        @api {PUT} /api/v1/users/user 修改用户信息
        @apiName 修改用户信息
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        修改用户信息
        普通用户只能修改自己的信息，管理员用户可以修改其他用户的信息
        
        @apiHeader {String=multipart/form-data,application/x-www-form-urlencoded} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌
        
        @apiParam {Number} userId 要修改资料的用户的编号
        @apiParam {String='1-64位'} [username] 用户名
        @apiParam {String='6-18位,同时有大小写字母、数字'} [password] 密码
        @apiParam {description='0-512位'} [description] 个人简介
        @apiParam {File='图片'} [avatar] 用户头像

        @apiUse Success201
        @apiSuccess(Success 201) {Number} data.userId 被修改的用户编号

        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":201,
            "message":"",
            "header":{},
            "data":{
                "userId":1
            }
        }

        @apiUse Errors
        @apiUse CompetenceError
        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse ParamValueError
        @apiUse ResourceUploadFailed
        @apiUse ResourceTypeError
        @apiUse LoginExpired
        @apiUse AuthorizationError
        @apiErrorExample {json} 用户名已被使用
        {
            "result":false,
            "code":403,
            "message":"用户名已被使用",
            "header":{},
            "data":{}
        }
    """
    pass


@api.route('/v1/users/user/admin', methods=['GET'])
def judge_admin():
    """
        @api {GET} /api/v1/users/user/admin 判断用户是否是管理员
        @apiName 判断用户是否是管理员
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        判断用户是不是管理员
        
        @apiHeader {String=application/json} Content-Type 浏览器编码类型

        @apiParam {Number} userId 要判断的用户的编号
        @apiParamExample {json} 参数示例
        {
            "userId":1
        }

        @apiUse Success200
        @apiSuccess {Boolean} data.isAdmin 是否是管理员
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "isAdmin":true
            }
        }

        @apiUse Errors
        @apiUse UserNotFound
        @apiUse ParamNeed
        @apiUse ParamTypeError
    """
    pass


@api.route('/v1/users/user/super-admin', methods=['GET'])
def judge_super_admin():
    """
        @api {GET} /api/v1/users/user/super-admin 判断用户是否是超级管理员
        @apiName 判断用户是否是超级管理员
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        判断用户是不是超级管理员

        @apiHeader {String=application/json} Content-Type 浏览器编码类型

        @apiParam {Number} userId 要判断的用户的编号
        @apiParamExample {json} 参数示例
        {
            "userId":1
        }

        @apiUse Success200
        @apiSuccess {Boolean} data.isSuperAdmin 是否是超级管理员
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "isSuperAdmin":true
            }
        }

        @apiUse Errors
        @apiUse UserNotFound
        @apiUse ParamNeed
        @apiUse ParamTypeError
    """
    pass


@api.route('/v1/users/user/videos', methods=['GET'])
def get_user_videos():
    """
        @api {GET} /api/v1/users/user/videos 获取用户上传的全部视频
        @apiName 获取用户上传的全部视频
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        根据用户编号获取对应用户上传的全部视频
        
        @apiHeader {String=application/json} Content-Type 浏览器编码类型
    
        
        @apiParam {Number} userId 用户编号
        @apiParamExample {json} 参数示例
        {
            "userId":1
        }

        @apiUse Success200
        @apiSuccess {Object[]} data.videos 视频数组
        @apiSuccess {Number} data.videos.id 视频编号
        @apiSuccess {String} data.videos.name 视频名称
        @apiSuccess {Number} data.videos.authorId 作者编号
        @apiSuccess {String} data.videos.authorName 作者名称
        @apiSuccess {String} data.videos.introduction 视频简介
        @apiSuccess {Number} data.videos.likes 点赞数
        @apiSuccess {Number} data.videos.views 观看数
        @apiSuccess {String} data.videos.releaseTime 发布时间
        @apiSuccess {String} data.videos.imageUrl 封面图片url
        @apiSuccess {String} data.videos.videoUrl 视频url
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "videos":[
                    {
                        "id":1,
                        "name":"name",
                        "authorId":1,
                        "authorName":"user1",
                        "introduction":"introduction",
                        "likes":50,
                        "views":5012,
                        "releaseTime":"2012-4-9",
                        "imageUrl":"http://xxx",
                        "videoUrl":"http://xxx"
                    },
                    {...}
                ]
            }
        }

        @apiUse Errors
        @apiUse UserNotFound
        @apiUse ParamNeed
        @apiUse ParamTypeError
    """

    pass


@api.route('/v1/users/user/articles', methods=['GET'])
def get_user_articles():
    """
        @api {GET} /api/v1/users/user/articles 获取用户上传的全部文章
        @apiName 获取用户上传的全部文章
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        根据用户编号获取用户上传的全部文章Id

        @apiHeader {String=application/json} Content-Type 浏览器编码类型


        @apiParam {Number} userId 用户编号
        @apiParamExample {json} 参数示例
        {
            "userId":1
        }

        @apiUse Success200
        @apiSuccess {Object[]} data.articles 文章
        @apiSuccess {Number} data.articles.authorId 作者编号
        @apiSuccess {String} data.articles.authorName 作者名称
        @apiSuccess {String} data.articles.content 文章内容
        @apiSuccess {String} data.articles.releaseTime 发布时间
        @apiSuccess {Number} data.articles.likes 点赞数
        @apiSuccess {Number} data.articles.views 观看量
        @apiSuccess {String} data.articles.imgUrl 封面图片链接
        @apiSuccess {Number} data.articles.commentNumber 评论数
        @apiSuccessExample {json} 返回值示例
        {
            "result": true,
            "code": 200,
            "message": "",
            "header":{},
            "data":{
                "articles":[
                    {
                        "id":1,
                        "title":"文章标题",
                        "authorId":1,
                        "authorName":"张三",
                        "content":"文章内容",
                        "releaseTime":"2020-5-5",
                        "likes":10,
                        "views":200,
                        "imgUrl":"http://xxx",
                        "commentsNumber":10
                    },
                    {...}
                ]
            }
        }

        @apiUse Errors
        @apiUse UserNotFound
        @apiUse ParamNeed
        @apiUse ParamTypeError
    """
    pass


@api.route('/v1/users/user/confirm-school', methods=['POST'])
def confirm_user_school():
    """
        @api {POST} /api/v1/users/user/confirm-school 用户学校认证
        @apiName 用户学校认证
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        对用户进行学校认证, 必须传入学信网学籍信息或者学校邮箱(2选1)

        @apiHeader {String=multipart/form-data,application/x-www-form-urlencoded} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌

        @apiParam {Number} userId 用户编号
        @apiParam {String} realName 真实姓名
        @apiParam {String} realId 身份证号
        @apiParam {String} school 学校
        @apiParam {String} profession 专业
        @apiParam {Number="0 -- 学校邮箱认证", "1 -- 学信网材料认证"} confirmType 认证方式
        @apiParam {File='PDF文件','图片'} [studentStatusInfo] 学信网学籍信息
        @apiParam {String} [schoolEmail] 学校邮箱

        @apiUse Success200
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{}
        }

        @apiUse Errors
        @apiUse ParamTypeError
        @apiUse ParamValueError
        @apiUse ParamNeed
        @apiUse ResourceTypeError
        @apiUse ResourceUploadFailed
        @apiUse UserNotFound
        @apiUse CompetenceError
        @apiUse LoginExpired
        @apiUse AuthorizationError
    """

    pass


@api.route('/v1/users/user/follow', methods=['POST'])
def follow():
    """
        @api {POST} /api/v1/users/user/follow 关注
        @apiName 关注
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        传入关注者的用户编号与被关注者的用户编号，使关注者关注被关注者

        @apiHeader {String=application/json} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 关注者的用户认证令牌

        @apiParam {Number} followerId 关注者编号
        @apiParam {Number} followedId 被关注者编号
        @apiParamExample {json} 参数示例
        {
            "followerId":1,
            "followedId":2
        }

        @apiUse Success200
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{}
        }

        @apiUse Errors
        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse CompetenceError
        @apiUse UserNotFound
        @apiUse LoginExpired
        @apiUse AuthorizationError
    """
    pass


@api.route('/v1/users/user/follow', methods=['DELETE'])
def unfollow():
    """
        @api {DELETE} /api/v1/users/user/follow 取消关注
        @apiName 取消关注
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        传入关注者编号和被关注者编号，取消关注者对被关注者的关注

        @apiHeader {String=application/json} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌

        @apiParam {Number} followerId 关注者编号
        @apiParam {Number} followedId 被关注者编号
        @apiParamExample {json} 参数示例
        {
            "followerId":1,
            "followedId":2
        }

        @apiUse Success204

        @apiUse Errors
        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse UserNotFound
        @apiUse CompetenceError
        @apiUse LoginExpired
        @apiUse AuthorizationError
        @apiErrorExample {json} 没有关注过该用户
        {
            "result":false,
            "code":403,
            "message":"没有关注过该用户",
            "header":{},
            "data":{}
        }
    """
    pass


@api.route('/v1/users/user/follow', methods=['GET'])
def is_following():
    """
        @api {GET} /api/v1/users/user/follow 判断某用户是否关注某用户
        @apiName 判断某用户是否关注某用户
        @apiGroup 用户
        @apiVersion 1.0.0
        @apiDescription
        传入用户1编号和用户2编号，判断用户1是否关注用户2
        
        @apiHeader {String=application/json} Content-Type 浏览器编码类型
    
        
        @apiParam {Number} userOneId 用户1编号
        @apiParam {Number} userTwoId 用户2编号
        @apiParamExample {json} 参数示例
        {
            "userOneId":1,
            "userTwoId":2
        }

        @apiUse Success200
        @apiSuccess {Boolean} data.isFollowing 是否关注
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "isFollowing":true
            }
        }
        
        @apiUse ParamNeed
        @apiUse UserNotFound
        @apiUse ParamTypeError
    """
    pass

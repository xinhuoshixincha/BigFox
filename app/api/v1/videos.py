import os
from .. import api
from flask import jsonify, request
from ...userAuthorization import auth
from ...uploadFile import upload_file
from ....config import Config
from ...models import Videos
from ... import db


@api.route('/v1/videos/videos', methods=["GET"])
def get_videos():
    """
        @api {GET} /api/v1/videos/videos 获取视频
        @apiName 获取视频
        @apiGroup 视频
        @apiVersion 1.0.0
        @apiDescription
        可用来获取全部视频、指定数量的视频、指定排序顺序的视频、关键词匹配的视频以及分页视频

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型

        @apiParam{String="likes -- 点赞数降序","views -- 观看量降序","releaseTime -- 发布时间降序","total -- 综合"}[order="likes"]
        用来指定视频的排序方式。
        @apiParam {String} [searchValue] 搜索内容
        @apiParam {Boolean} isPagination=false 是否分页
        @apiParam {Number{大于0}} [pageNumber=1] 页码
        @apiParam {Number{大于0}} [pageSize=10] 页面大小
        @apiParamExample {json} 参数示例
        {
            "order": "likes",
            "searchValue":"hello",
            "isPagination":true,
            "pageNumber":1,
            "pageSize":5
        }

        @apiUse Success200
        @apiSuccess {object[]} data.videos 获取到的视频
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
                "videos": [
                    {
                        "id": 12,
                        "name": "testVideo",
                        "authorId": 1,
                        "authorName": "testMan",
                        "introduction": "test video",
                        "likes": 50,
                        "views": 5023,
                        "releaseTime": "2021-4-21",
                        "imageUrl": "http://xxx",
                        "videoUrl": "http://xxx"
                    },
                    {...},
                ]
            }
        }

        @apiUse Errors
        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse ParamValueError
    """
    pass


@api.route('/v1/videos/video', methods=["GET"])
def get_video():
    """
    @api {GET} /api/v1/videos/video 根据序号获取单个视频
    @apiName 根据序号获取单个视频
    @apiGroup 视频
    @apiVersion 1.0.0
    @apiDescription
    传入视频序号id，根据此序号查找视频的全部信息

    @apiHeader {String="application/json"} Content-Type 浏览器编码类型

    @apiParam {Number} id 要获取的视频的id
    @apiParamExample {json} 参数示例
    {
        "id": 1
    }

    @apiUse Success200
    @apiSuccess {Number} data.id 视频编号
    @apiSuccess {String} data.name 视频名称
    @apiSuccess {Number} data.authorId 作者编号
    @apiSuccess {String} data.authorName 作者名称
    @apiSuccess {String} data.introduction 视频简介
    @apiSuccess {Number} data.likes 点赞数
    @apiSuccess {Number} data.views 观看数
    @apiSuccess {String} data.releaseTime 发布时间
    @apiSuccess {String} data.imageUrl 视频封面Url
    @apiSuccess {String} data.videoUrl 视频Url
    @apiSuccessExample {json} 返回值
    {
        "result":true,
        "code":200,
        "message":"",
        "header":{},
        "data":{
            "id": 12,
            "name": "testVideo",
            "authorId": 1,
            "authorName": "testMan",
            "introduction": "test video",
            "likes": 50,
            "views": 5023,
            "releaseTime": "2021-4-21",
            "imageUrl": "http://xxx",
            "videoUrl": "http://xxx"
        }
    }

    @apiUse Errors
    @apiUse ResourceNotFound
    @apiUse ParamNeed
    @apiUse ParamTypeError
    """
    pass


@api.route('/v1/videos/video', methods=["POST"])
@auth.login_required
def upload_video():
    """
        @api {POST} /api/v1/videos/video 上传视频
        @apiName 上传视频
        @apiGroup 视频
        @apiVersion 1.0.0
        @apiDescription
        通过表单上传视频及相关信息

        @apiHeader {String="multipart/form-data","application/x-www-form-urlencoded"} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌

        @apiParam {Number} userId 用户编号
        @apiParam {String{1到64}} name 视频名称
        @apiParam {String{0到512}} [introduction] 视频简介
        @apiParam {File} image 视频封面
        @apiParam {File} video 视频

        @apiUse Success200
        @apiSuccess {Number} data.videoId 上传的视频的编号
        @apiSuccessExample {json} 返回值
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "videoId":1
            }
        }

        @apiUse Errors
        @apiUse CompetenceError
        @apiUse ParamTypeError
        @apiUse ParamValueError
        @apiUse ParamNeed
        @apiUse ResourceTypeError
        @apiUse ResourceUploadFailed
        @apiUse LoginExpired
        @apiUse AuthorizationError
        @apiUse UserNotFound
    """
    data = request.form
    files = request.files

    name = data.get("name")
    introduction = data.get("introduction")
    author_id = int(data.get("userId"))
    img = files.get("image")
    video = files.get("video")

    # 缺少参数值
    if name is None or img is None or video is None or author_id is None:
        return jsonify(result=False, code=400, message="缺少参数值!", header={}, data={})
    # 参数类型错误
    if type(name) != str or type(author_id) != int:
        return jsonify(result=False, code=400, message="参数类型错误!", header={}, data={})
    if introduction is not None:
        if type(introduction) != str:
            return jsonify(result=False, code=400, message="参数类型错误!", header={}, data={})
        if introduction.__len__() < 0 or introduction.__len__() > 512:
            return jsonify(result=False, code=400, message="参数值错误!", header={}, data={})
    # 参数值错误
    if name.__len__() < 1 or name.__len__() > 64:
        return jsonify(result=False, code=400, message="参数值错误!", header={}, data={})

    img_response = upload_file(img, "videoImg", Config.IMAGE_ALLOWED_TYPE)
    if img_response.get('result') is not None:
        return jsonify(result=img_response['result'], code=img_response['code'], message=img_response['message'],
                       header=img_response['header'], data=img_response['data']), img_response['code']

    video_response = upload_file(video, "videos", Config.VIDEO_ALLOWED_TYPE)
    if video_response.get('result') is not None:
        os.remove(img_response.get('path'))
        return jsonify(result=video_response['result'], code=video_response['code'], message=video_response['message'],
                       header=video_response['header'], data=video_response['data']), video_response['code']

    video = Videos()
    video.name = name
    if introduction is not None:
        video.introduction = introduction
    video.image_url = img_response.get("url")
    video.video_url = video_response.get("url")
    video.author_id = author_id
    db.session.add(video)
    db.session.commit()
    return jsonify(result=True, code=200, message="", header={}, data={}), 200


@api.route('/v1/videos/video', methods=["DELETE"])
def delete_video():
    """
        @api {DELETE} /api/v1/videos/video 删除视频
        @apiName 删除视频
        @apiGroup 视频
        @apiVersion 1.0.0
        @apiDescription
        传入视频编号<code>id</code>来删除对应的视频
        普通用户可以删除自己的视频，管理员用户可以删除其他用户的视频

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌

        @apiParam {Number{大于等于0}} id 视频编号
        @apiParamExample {json} 参数示例
        {
            "id":1
        }

        @apiUse Success204

        @apiUse Errors
        @apiUse CompetenceError
        @apiUse ResourceNotFound
        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse LoginExpired
        @apiUse AuthorizationError
    """
    pass

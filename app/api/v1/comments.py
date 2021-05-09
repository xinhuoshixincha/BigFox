from .. import api


@api.route('/v1/comments/videos/comments', methods=["GET"])
def get_comments():
    """
        @api {GET} /api/v1/comments/videos/comments 获取视频评论
        @apiName 获取视频评论
        @apiGroup 评论
        @apiVersion 1.0.0
        @apiDescription
        传入视频编号获取视频下的全部用户的评论
        可以根据传入的<code>order</code>获取指定排序方式的评论……

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型

        @apiParam {Number{大于等于0}} videoNumber 视频编号
        @apiParam {String="likes -- 点赞数降序","releaseTime -- 发布时间降序"} [order="likes"] 指定评论的排序方式
        @apiParam {boolean} isPagination=false 是否分页
        @apiParam {Number{大于0}} [pageNumber=1] 页码
        @apiParam {Number{大于0}} [pageSize=5] 每页大小
        @apiParamExample {json} 获取某视频下面的全部评论
        {
            "videoNumber":1,
            "order":"likes",
            "isPagination":false
        }
        @apiParamExample {json} 按10个评论每页，获取第1页所有评论
        {
            "videoNumber":1,
            "isPagination":true,
            "pageNumber":1,
            "pageSize":10
        }

        @apiUse Success200
        @apiSuccess {Object[]} data.comments 所有评论
        @apiSuccess {Number} data.comments.id 评论编号
        @apiSuccess {String} data.comments.content 评论内容
        @apiSuccess {Number} data.comments.userId 发布此评论的用户编号
        @apiSuccess {Number} data.comments.videoId 评论所属的视频
        @apiSuccess {Number} data.comments.likes 点赞数
        @apiSuccess {String} data.comments.releaseTime 评论发布时间
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "comments":[
                    {
                        "id":1,
                        "content":"1楼",
                        "userId":1,
                        "videoId":1,
                        "likes":20,
                        "releaseTime":"2020-5-4"
                    },
                    {...}
                ]
            }
        }

        @apiUse Errors
        @apiUse ParamValueError
        @apiUse ParamTypeError
        @apiUse ParamNeed
    """
    pass


@api.route('/v1/comments/videos/comments/reply', methods=["GET"])
def get_reply():
    """
        @api {GET} /api/v1/comments/videos/comments/reply 获取视频评论的全部回复
        @apiName 获取视频评论的全部回复
        @apiGroup 评论
        @apiVersion 1.0.0
        @apiDescription
        传入评论编号获取对应的回复

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型

        @apiParam {Number} commentId 评论编号
        @apiParamExample {json} 参数示例
        {
            "commentId":1
        }

        @apiUse Success200
        @apiSuccess {Number} data.id 评论编号
        @apiSuccess {String} data.content 评论内容
        @apiSuccess {Number} data.userId 发布此评论的用户编号
        @apiSuccess {Number} data.videoId 评论所属的视频
        @apiSuccess {Number} data.likes 点赞数
        @apiSuccess {String} data.releaseTime 评论发布时间
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "id":1,
                "content":"1楼",
                "userId":1,
                "videoId":1,
                "likes":20,
                "releaseTime":"2020-5-4"
            }
        }

        @apiUse Errors
        @apiUse ResourceNotFound
        @apiUse ParamNeed
        @apiUse ParamTypeError
    """
    pass


@api.route('/v1/comments/videos/comments', methods=["POST"])
def upload_comment():
    """
        @api {POST} /api/v1/comments/videos/comments 发布视频评论
        @apiName 发布视频评论
        @apiGroup 评论
        @apiVersion 1.0.0
        @apiDescription
        发布评论

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌

        @apiParam {Number{大于等于0}} videoId 评论所在视频的编号
        @apiParam {String{0-512位}} content 评论的内容
        @apiParam {Number{大于等于0}} [replyCommentId] 此评论回复的评论的编号
        @apiParamExample {json} 第一层评论(非回复)
        {
            "videoId":1,
            "content":"这是一个评论"
        }
        @apiParamExample {json} 回复
        {
            "videoId":1,
            "content":"这是一个回复",
            "replyCommentId":1
        }

        @apiUse Success200
        @apiSuccess {Number} data.commentId 上传的评论的编号
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "commentId":1
            }
        }

        @apiUse Errors
        @apiUse CompetenceError
        @apiUse ParamTypeError
        @apiUse ResourceNotFound
        @apiUse ParamValueError
        @apiUse ParamNeed
    """
    pass


@api.route('/v1/comments/videos/comments', methods=['DELETE'])
def delete_comments():
    """
        @api {DELETE} /api/v1/comments/videos/comments 删除视频评论
        @apiName 删除视频评论
        @apiGroup 评论
        @apiVersion 1.0.0
        @apiDescription
        根据传入的评论编号删除评论
        普通用户可以删除自己的评论，管理员用户可以删除其他用户的评论

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌

        @apiParam {Number} commentId 要删除的评论编号
        @apiParamExample {json} 参数示例
        {
            "commentId":1
        }

        @apiUse Success204

        @apiUse Errors
        @apiUse CompetenceError
        @apiUse ResourceNotFound
        @apiUse ParamNeed
        @apiUse ParamTypeError
"""
    pass


@api.route('/v1/comments/articles/comments', methods=["GET"])
def get_article_comments():
    """
        @api {GET} /api/v1/comments/articles/comments 获取文章评论
        @apiName 获取文章评论
        @apiGroup 评论
        @apiVersion 1.0.0
        @apiDescription
        传入文章编号获取文章下的全部用户的评论
        可以根据传入的<code>order</code>获取指定排序方式的评论……

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型

        @apiParam {Number{大于等于0}} articleNumber 文章编号
        @apiParam {String="likes -- 点赞数降序","releaseTime -- 发布时间降序"} [order="likes"] 指定评论的排序方式
        @apiParam {boolean} isPagination=false 是否分页
        @apiParam {Number{大于0}} [pageNumber=1] 页码
        @apiParam {Number{大于0}} [pageSize="获取全部评论"] 每页大小
        @apiParamExample {json} 获取某文章下面的全部评论
        {
            "articleNumber":1,
            "order":"likes",
            "isPagination":false
        }
        @apiParamExample {json} 按10个评论每页，获取第1页所有评论
        {
            "articleNumber":1,
            "isPagination":true,
            "pageNumber":1,
            "pageSize":10
        }

        @apiUse Success200
        @apiSuccess {Object[]} data.comments 所有评论
        @apiSuccess {Number} data.comments.id 评论编号
        @apiSuccess {String} data.comments.content 评论内容
        @apiSuccess {Number} data.comments.userId 发布此评论的用户编号
        @apiSuccess {Number} data.comments.articleId 评论所属的文章
        @apiSuccess {Number} data.comments.likes 点赞数
        @apiSuccess {String} data.comments.releaseTime 评论发布时间
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "comments":[
                    {
                        "id":1,
                        "content":"1楼",
                        "userId":1,
                        "articleId":1,
                        "likes":20,
                        "releaseTime":"2020-5-4"
                    },
                    {...}
                ]
            }
        }

        @apiUse Errors
        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse ParamValueError
        @apiUse ResourceNotFound
    """
    pass


@api.route('/v1/comments/articles/comments/reply', methods=["GET"])
def get_article_reply():
    """
        @api {GET} /api/v1/comments/articles/comments/reply 获取文章评论的全部回复
        @apiName 获取文章评论的全部回复
        @apiGroup 评论
        @apiVersion 1.0.0
        @apiDescription
        传入文章评论编号获取对应的回复

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型

        @apiParam {Number} commentId 评论编号
        @apiParamExample {json} 参数示例
        {
            "commentId":1
        }

        @apiUse Success200
        @apiSuccess {Number} data.id 评论编号
        @apiSuccess {String} data.content 评论内容
        @apiSuccess {Number} data.userId 发布此评论的用户编号
        @apiSuccess {Number} data.articleId 评论所属的文章
        @apiSuccess {Number} data.likes 点赞数
        @apiSuccess {String} data.releaseTime 评论发布时间
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "id":1,
                "content":"1楼",
                "userId":1,
                "articleId":1,
                "likes":20,
                "releaseTime":"2020-5-4"
            }
        }

        @apiUse Errors
        @apiUse ResourceNotFound
        @apiUse ParamTypeError
        @apiUse ParamNeed
    """
    pass


@api.route('/v1/comments/articles/comments', methods=["POST"])
def upload_article_comment():
    """
        @api {POST} /api/v1/comments/articles/comments 发布文章评论
        @apiName 发布文章评论
        @apiGroup 评论
        @apiVersion 1.0.0
        @apiDescription
        发布文章评论

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌

        @apiParam {Number{大于等于0}} articleId 评论所在文章的编号
        @apiParam {String{0-512位}} content 评论的内容
        @apiParam {Number{大于等于0}} [replyCommentId] 此评论回复的评论的编号
        @apiParamExample {json} 第一层评论(非回复)
        {
            "articleId":1,
            "content":"这是一个评论"
        }
        @apiParamExample {json} 回复
        {
            "articleId":1,
            "content":"这是一个回复",
            "replyCommentId":1
        }

        @apiUse Success200
        @apiSuccess {Number} data.commentId 上传的评论的编号
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "commentId":1
            }
        }

        @apiUse Errors
        @apiUse CompetenceError
        @apiUse ResourceNotFound
        @apiUse ParamTypeError
        @apiUse ParamNeed
    """
    pass


@api.route('/v1/comments/articles/comments', methods=['DELETE'])
def delete_article_comments():
    """
        @api {DELETE} /api/v1/comments/articles/comments 删除文章评论
        @apiName 删除文章评论
        @apiGroup 评论
        @apiVersion 1.0.0
        @apiDescription
        根据传入的评论编号删除文章评论
        普通用户可以删除自己的评论，管理员用户可以删除其他用户的评论

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌

        @apiParam {Number} commentId 要删除的文章评论编号
        @apiParamExample {json} 参数示例
        {
            "commentId":1
        }

        @apiUse Success204

        @apiUse Errors
        @apiUse CompetenceError
        @apiUse ResourceNotFound
        @apiUse ParamNeed
        @apiUse ParamTypeError
"""
    pass

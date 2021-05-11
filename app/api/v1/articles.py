from .. import api


@api.route('/v1/articles/articles', methods=['GET'])
def get_articles():
    """
        @api {GET} /api/v1/articles/articles 获取全部文章
        @apiName 获取全部文章
        @apiGroup 文章
        @apiVersion 1.0.0
        @apiDescription
        获取全部的文章

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型

        @apiParam{String="likes -- 点赞数降序","views -- 观看量降序","releaseTime -- 发布时间降序","total -- 综合"}[order="likes"]
        用来指定文章的排序方式。
        @apiParam {String} [searchValue] 搜索内容
        @apiParam {Boolean} isPagination=false 是否分页
        @apiParam {Number{大于0}} [pageNumber=1] 页码
        @apiParam {Number{大于0}} [pageSize=5] 页面大小
        @apiParamExample {json} 获取全部文章
        {
            "order":"likes",
            "isPagination":false
        }
        @apiParamExample {json} 搜索"文章"
        {
            "order":"likes",
            "searchValue":"文章",
            "isPagination":false
        }
        @apiParamExample {json} 分页
        {
            "order":"likes",
            "isPagination":true,
            "pageNumber":1,
            "pageSize":10
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
        @apiUse ParamValueError
        @apiUse ParamTypeError
    """
    pass


@api.route('/v1/articles/article', methods=['GET'])
def get_article():
    """
        @api {GET} /api/v1/articles/article 获取单个文章
        @apiName 获取单个文章
        @apiGroup 文章
        @apiVersion 1.0.0
        @apiDescription
        传入文章编号获取单个文章

        @apiHeader {String="application/json"} Content-Type 浏览器编码类型

        @apiParam {Number} articleId 文章编号
        @apiParamExample {json} 参数示例
        {
            "articleId":1
        }

        @apiUse Success200
        @apiSuccess {Number} data.id 文章编号
        @apiSuccess {String} data.title 文章标题
        @apiSuccess {Number} data.authorId 作者编号
        @apiSuccess {String} data.authorName 作者名称
        @apiSuccess {String} data.content 文章内容
        @apiSuccess {String} data.releaseTime 发布时间
        @apiSuccess {Number} data.likes 点赞数
        @apiSuccess {Number} data.views 观看量
        @apiSuccess {String} data.imgUrl 封面图片链接
        @apiSuccess {Number} data.commentNumber 评论数

        @apiSuccessExample {json} 返回值示例
        {
            "result": true,
            "code": 200,
            "message":"",
            "header":{},
            "data":{
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
            }
        }

        @apiUse Errors
        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse ResourceNotFound
    """
    pass


@api.route('/v1/articles/articles', methods=['POST'])
def upload_article():
    """
        @api {POST} /api/v1/articles/articles 上传文章
        @apiName 上传文章
        @apiGroup 文章
        @apiVersion 1.0.0
        @apiDescription
        上传文章

        @apiHeader {String="multipart/form-data","application/x-www-form-urlencoded"} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌

        @apiParam {String{0-64位}} title 文章标题
        @apiParam {String} content 文章内容
        @apiParam {File} image 封面图片

        @apiUse Success200
        @apiSuccess {Number} data.articleId 上传的文章的编号
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "articleId":1
            }
        }

        @apiUse Errors
        @apiUse ParamNeed
        @apiUse ParamValueError
        @apiUse ParamTypeError
        @apiUse CompetenceError
        @apiUse ResourceUploadFailed
        @apiUse ResourceTypeError
        @apiUse LoginExpired
        @apiUse AuthorizationError
    """
    pass


@api.route('/v1/articles/articles/image', methods=['POST'])
def upload_image():
    """
        @api {POST} /api/v1/articles/articles/image 上传图片
        @apiName 上传图片
        @apiGroup 文章
        @apiVersion 1.0.0
        @apiDescription
        上传一个图片并返回此图片的链接，可直接用于文章中

        @apiHeader {String=multipart/form-data,application/x-www-form-urlencoded} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌

        @apiParam {File} image 图片

        @apiUse Success200
        @apiSuccess {String} data.imageUrl 图片链接
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":200,
            "message":"",
            "header":{},
            "data":{
                "imageUrl":"http://xxx"
            }
        }

        @apiUse Errors
        @apiUse ParamNeed
        @apiUse ParamTypeError
        @apiUse ParamValueError
        @apiUse CompetenceError
        @apiUse ResourceUploadFailed
        @apiUse ResourceTypeError
        @apiUse LoginExpired
        @apiUse AuthorizationError
    """
    pass


@api.route('/v1/articles/article', methods=['DELETE'])
def delete_article():
    """
        @api {DELETE} /api/v1/articles/article 删除文章
        @apiName 删除文章
        @apiGroup 文章
        @apiVersion 1.0.0
        @apiDescription
        传入文章编号删除文章
        普通用户可以删除自己的文章，管理员用户可以删除其他用户的文章

        @apiHeader {String=application/json} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌


        @apiParam {Number} articleId 要删除的文章编号
        @apiParamExample {json} 参数示例
        {
            "articleId":1
        }

        @apiUse Success204

        @apiUse Errors
        @apiUse CompetenceError
        @apiUse ParamTypeError
        @apiUse ParamNeed
        @apiUse ResourceNotFound
        @apiUse LoginExpired
        @apiUse AuthorizationError
    """
    pass


@api.route('/v1/articles/article', methods=['PUT'])
def update_article():
    """
        @api {PUT} /api/v1/articles/article 修改文章
        @apiName 修改文章
        @apiGroup 文章
        @apiVersion 1.0.0
        @apiDescription
        传入文章编号、新标题、新内容、新封面等来修改文章

        @apiHeader {String=multipart/form-data,application/x-www-form-urlencoded} Content-Type 浏览器编码类型
        @apiHeader {String} Authorization 用户认证令牌


        @apiParam {Number} articleId 要修改的文章编号
        @apiParam {String{0-64位}} [title] 修改后的文章标题
        @apiParam {String} content 修改后的文章内容
        @apiParam {File} [image] 修改后的封面图片

        @apiUse Success201
        @apiSuccess {Number} data.articleId 被修改的文章编号
        @apiSuccessExample {json} 返回值示例
        {
            "result":true,
            "code":201,
            "message":"",
            "header":{},
            "data":{
                "articleId":1
            }
        }

        @apiUse Errors
        @apiUse CompetenceError
        @apiUse ResourceNotFound
        @apiUse ParamTypeError
        @apiUse ParamValueError
        @apiUse ParamNeed
        @apiUse ResourceUploadFailed
        @apiUse ResourceTypeError
        @apiUse LoginExpired
        @apiUse AuthorizationError
    """
    pass

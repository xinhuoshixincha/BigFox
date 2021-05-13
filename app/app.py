"""
    @apiDefine Errors
    @apiError result 是否正确
    @apiError code 错误码
    @apiError message 错误信息
    @apiError header 需要客户端保存的http请求头
    @apiError data 返回数据
"""
"""
    @apiDefine CompetenceError
    @apiErrorExample {json} 权限不足
    {
        "result":false,
        "code":401,
        "message":"权限不足!",
        "header":{},
        "data":{}
    }
"""
"""
    @apiDefine LoginExpired
    @apiErrorExample {json} 登录过期
    {
        "result":false,
        "code":401,
        "message":"登录过期",
        "header":{},
        "data":{}
    }
"""
"""
    @apiDefine AuthorizationError
    @apiErrorExample {json} 用户认证令牌错误
    {
        "result":false,
        "code":401,
        "message":"用户认证令牌错误",
        "header":{},
        "data":{}
    }
"""
"""
    @apiDefine ParamValueError
    @apiErrorExample {json} 参数值错误
    {
        "result":false,
        "code":400,
        "message":"参数值错误!",
        "header":{},
        "data":{}
    }
"""
"""
    @apiDefine ParamNeed
    @apiErrorExample {json} 缺少参数值
    {
        "result":false,
        "code":400,
        "message":"缺少参数值!",
        "header":{},
        "data":{}
    }

"""
"""
    @apiDefine ParamTypeError
    @apiErrorExample {json} 参数类型错误
    {
        "result":false,
        "code":400,
        "message":"参数类型错误!",
        "header":{},
        "data":{}
    }
"""

"""
    @apiDefine ResourceNotFound
    @apiErrorExample {json} 资源未找到
    {
        "result":false,
        "code":404,
        "message":"资源未找到",
        "header":{},
        "data":{}
    }
"""

"""
    @apiDefine UserNotFound
    @apiErrorExample {json} 用户未找到
    {
        "result":false,
        "code":404,
        "message":"未找到此用户",
        "header":{},
        "data":{}    
    }
"""

"""
    @apiDefine ResourceUploadFailed
    @apiErrorExample {json} 资源上传失败
    {
        "result":false,
        "code":408,
        "message":"请求超时，资源上传失败",
        "header":{},
        "data":{}
    }
"""

"""
    @apiDefine ResourceTypeError
    @apiErrorExample {json} 文件类型错误
    {
        "result":false,
        "code":415,
        "message":"文件类型错误",
        "header":{},
        "data":{}
    }
"""

"""
    @apiDefine Success200
    @apiSuccess {Boolean="true -- 成功","false -- 失败"} result 接口调用结果
    @apiSuccess {Number} code http状态码
    @apiSuccess {String="接口调用成功时为空","接口调用失败时为错误信息"} message 服务器返回的消息
    @apiSuccess {Object} header 需要客户端保存的http请求头
    @apiSuccess {Object} data 服务器返回的数据
"""

"""
    @apiDefine Success204
    @apiSuccess(Success 204) {Boolean="true -- 成功","false -- 失败"} result 接口调用结果
    @apiSuccess(Success 204) {Number} code http状态码
    @apiSuccess(Success 204) {String="接口调用成功时为空","接口调用失败时为错误信息"} message 服务器返回的消息
    @apiSuccess(Success 204) {Object} header 需要客户端保存的http请求头
    @apiSuccess(Success 204) {Object} data 服务器返回的数据
    
    @apiSuccessExample {json} 返回值示例
    {
        "result":true,
        "code":204,
        "message":"",
        "header":{},
        "data":{}
    }
"""

"""
    @apiDefine Success201
    @apiSuccess(Success 201) {Boolean="true -- 成功","false -- 失败"} result 接口调用结果
    @apiSuccess(Success 201) {Number} code http状态码
    @apiSuccess(Success 201) {String="接口调用成功时为空","接口调用失败时为错误信息"} message 服务器返回的消息
    @apiSuccess(Success 201) {Object} header 需要客户端保存的http请求头
    @apiSuccess(Success 201) {Object} data 服务器返回的数据
"""

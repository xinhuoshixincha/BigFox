from .. import api


@api.route("/v1/email/email", methods=["POST"])
def send_mail():
    """
        @api {POST} /api/v1/email/email 发送邮件
        @apiName 发送邮件
        @apiGroup 邮件
        @apiVersion 1.0.0
        @apiDescription
        传入邮箱地址，发送邮件验证码

        @apiHeader {String=application/json} Content-Type 浏览器编码类型


        @apiParam {String} emailAddress 邮箱地址
        @apiParamExample {json} 参数示例
        {
            "emailAddress":"邮箱地址"
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
        @apiUse ParamTypeError
        @apiUse ParamNeed
    """
    pass

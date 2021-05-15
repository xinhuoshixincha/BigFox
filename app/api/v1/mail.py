from .. import api
from ...email import send_email
from ... import redis_client
from flask import request, jsonify
from ....config import Config
import random


@api.route("/v1/email/email", methods=["POST"])
def send_mail_code():
    """
        @api {POST} /api/v1/email/email 发送邮件验证码（已完成）
        @apiName 发送邮件验证码（已完成）
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
    data = request.get_json()
    email = data.get("emailAddress")
    email_code = str(random.randint(10000, 99999))
    send_email(email, 'BIGFOX验证码', "验证码："+email_code)
    redis_pope_line = redis_client.pipeline()
    # 向redis数据库中添加验证码并设置过期时间
    redis_pope_line.set(email+Config.REDIS_USER_FILED_ONE, email_code, ex=Config.REDIS_USER_FILED_ONE_EXPIRED)
    redis_pope_line.execute()
    return jsonify(result=True, code=200, message="", header={}, data={}), 200

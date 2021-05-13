from . import mail
from flask_mail import Message
from threading import Thread
from ..config import Config
import re


def send_async_email(app, msg):
    with app.app_context():
        mail.send(msg)


def send_email(to, subject, body):
    """发送邮件

    :param body: 邮件内容
    :param to:邮件发送的目的地址
    :param subject:邮件主题
    :return:线程
    """
    msg = Message(Config.FLASKY_MAIL_SUBJECT_PREFIX + subject
                  , sender=Config.FLASK_MAIL_SENDER, recipients=[to])
    msg.body = body
    from ..flasky import app
    thr = Thread(target=send_async_email, args=[app, msg])
    thr.start()
    return thr


def validate_email(email):
    if re.match("^.+@(\\[?)[a-zA-Z0-9\\-.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(]?)$", email) is not None:
        return True
    else:
        return False

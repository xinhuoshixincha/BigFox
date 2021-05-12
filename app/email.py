from . import mail
from flask_mail import Message
from threading import Thread
from ..config import Config


def send_async_email(app, msg):
    with app.app_context():
        mail.send(msg)


def send_email(to, subject):
    """发送邮件

    :param to:邮件发送的目的地址
    :param subject:邮件主题
    :return:线程
    """
    msg = Message(Config.FLASKY_MAIL_SUBJECT_PREFIX + subject
                  , sender=Config.FLASK_MAIL_SENDER, recipients=[to])
    msg.body = "验证码: 453685"
    from ..flasky import app
    thr = Thread(target=send_async_email, args=[app, msg])
    thr.start()
    return thr

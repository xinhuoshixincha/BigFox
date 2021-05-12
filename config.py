import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    """基础配置类"""
    SECRET_KEY = os.environ.get('SECRET_KEY', 'DA@HU$BIG\FOX(web^')

    MAIL_SERVER = os.environ.get('MAIL_SERVER', 'smtp.qq.com')
    MAIL_PORT = int(os.environ.get('MAIL_PORT', '465'))
    MAIL_USE_SSL = os.environ.get('MAIL_USE_SSL', 'true').lower() in ['true', 'on', '1']
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME', '3157684388@qq.com')
    # todo 这里应该只用环境变量， 不能使用显式赋值
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD', 'nsqegchsfbvkdced')
    FLASKY_MAIL_SUBJECT_PREFIX = '[BIG-FOX]'
    FLASK_MAIL_SENDER = 'BIG-FOX DAHU <3157684388@qq.com>'
    # todo 这里应该用环境变量，暂时使用显式赋值
    FLASK_ADMIN = '3157684388@qq.com'

    UPLOADED_AVATAR_DEST = basedir + '\\app\\static\\file\\avatar\\'
    UPLOADED_FILES_DEST = basedir + '\\files\\toolFiles\\'
    UPLOADED_PICTURES_DEST = basedir + '\\app\\static\\file\\pictures\\'

    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get("DEV_DATABASE_URL",
                                             'postgresql://PiLiPaLaAdmin:zhimakaimen@127.0.0.1/PiLiPaLaTest')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JSON_AS_ASCII = os.environ.get('JSON_AS_ASCII', False)
    AUTHORIZATION_EXPIRES_TIME = os.environ.get('AUTHORIZATION_EXPIRES_TIME', 60 * 60 * 3)
    REDIS_URL = os.environ.get('REDIS_URL', "redis://:123456@localhost:6379/0")

    REDIS_USER_FILED_ONE = 'email_code'
    REDIS_USER_FILED_ONE_EXPIRED = 60 * 3
    REDIS_USER_FILED_TWO = 'submit_token'
    REDIS_USER_FILED_TWO_EXPIRED = 3

    @staticmethod
    def init_app(app):
        pass

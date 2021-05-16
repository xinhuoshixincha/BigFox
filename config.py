import os

basedir = os.path.abspath(os.path.dirname(__file__))
apiBasedir = basedir + '\\app'


class Config:
    """基础配置类"""
    SECRET_KEY = os.environ.get('SECRET_KEY', 'DA@HU$BIG\FOX(web^')

    MAIL_SERVER = os.environ.get('MAIL_SERVER', 'smtp.qq.com')
    MAIL_PORT = int(os.environ.get('MAIL_PORT', '465'))
    MAIL_USE_SSL = os.environ.get('MAIL_USE_SSL', 'true').lower() in ['true', 'on', '1']
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME', '3157684388@qq.com')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD', 'nsqegchsfbvkdced')
    FLASKY_MAIL_SUBJECT_PREFIX = '[BIG-FOX]'
    FLASK_MAIL_SENDER = 'BIG-FOX DAHU <'+MAIL_USERNAME+'>'

    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get("DEV_DATABASE_URL",
                                             'postgresql://PiLiPaLaAdmin:zhimakaimen@127.0.0.1/PiLiPaLaTest')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JSON_AS_ASCII = os.environ.get('JSON_AS_ASCII', False)
    AUTHORIZATION_EXPIRES_TIME = os.environ.get('AUTHORIZATION_EXPIRES_TIME', 60 * 60 * 24 * 15)
    REDIS_URL = os.environ.get('REDIS_URL', "redis://:@localhost:6379/0")

    REDIS_USER_FILED_ONE = '_email_code'
    REDIS_USER_FILED_ONE_EXPIRED = 60 * 30

    IMAGE_ALLOWED_TYPE = {'jpg', 'png', 'gif'}
    VIDEO_ALLOWED_TYPE = {'mp4', 'm4v', 'webm', 'avi', 'flv'}

    SEARCH_SIMILARITY = 0.45

    DEFAULT_AVATAR_URL = "static/avatar/default"
    @staticmethod
    def init_app(app):
        pass

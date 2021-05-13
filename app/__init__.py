__all__ = ['models', 'mail', 'create_app', 'db']

from flask import Flask
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from ..config import Config
from flask_redis import FlaskRedis
from flask_migrate import Migrate

mail = Mail()
db = SQLAlchemy()
redis_client = FlaskRedis()
migrate = Migrate()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    Config.init_app(app)
    mail.init_app(app)
    db.init_app(app)
    redis_client.init_app(app)
    migrate.init_app(app, db)

    # 从main目录引入main对象 —— main是一个蓝本对象
    from .api import api as api_blueprint
    # 注册蓝本
    app.register_blueprint(api_blueprint, url_prefix='/api')
    return app

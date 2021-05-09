__all__ = ['models', 'mail', 'create_app', 'db']
from flask import Flask
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from ..config import Config


mail = Mail()
db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    Config.init_app(app)
    mail.init_app(app)
    db.init_app(app)

    # 从main目录引入main对象 —— main是一个蓝本对象
    from .api import api as api_blueprint
    # 注册蓝本
    app.register_blueprint(api_blueprint, url_prefix='/api')
    return app

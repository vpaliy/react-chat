from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_mail import Mail
from app.exceptions import InvalidUsage


db = SQLAlchemy()
migrate = Migrate()
login = LoginManager()
mail = Mail()


def register_blueprints(app):
  from app.user import users
  from app.main import main

  app.register_blueprint(main)
  app.register_blueprint(users)


def register_error_handlers(app):
  def error_handler(error):
    response = error.to_json()
    response.status_code = error.status_code
    return response
  app.errorhandler(InvalidUsage)(error_handler)


def create_app(config):
  app =  Flask(
    __name__,
    template_folder='../../frontend/public'
  )
  app.config.from_object(config)

  db.init_app(app)
  migrate.init_app(app, db)
  login.init_app(app)
  mail.init_app(app)

  register_blueprints(app)
  register_error_handlers(app)

  return app

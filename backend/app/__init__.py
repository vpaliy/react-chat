from flask import Flask
from app.extensions import db, migrate, login, mail, jwt, cors
from app.exceptions import InvalidUsage


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


def register_extensions(app):
  origins = app.config.get('CORS_ORIGIN_WHITELIST', '*')
  cors.init_app(app, origins=origins)
  db.init_app(app)
  migrate.init_app(app, db)
  login.init_app(app)
  mail.init_app(app)
  jwt.init_app(app)


def create_app(config):
  app =  Flask(
    __name__,
    template_folder='../../frontend/public'
  )
  app.config.from_object(config)

  register_extensions(app)
  register_blueprints(app)
  register_error_handlers(app)

  return app

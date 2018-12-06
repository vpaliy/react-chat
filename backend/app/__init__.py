from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_mail import Mail

db = SQLAlchemy()
migrate = Migrate()
login = LoginManager()
mail = Mail()

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

  from app.main import main
  app.register_blueprint(main)

  from app.user import users
  app.register_blueprint(users)

  return app

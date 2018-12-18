from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_mail import Mail
from flask_jwt_extended import JWTManager
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()
login = LoginManager()
mail = Mail()
jwt = JWTManager()
cors = CORS()

from app.user.models import User

@jwt.user_identity_loader
def identity_loader(user):
  return user.id


@jwt.user_loader_callback_loader
def user_loader(identity):
  return User.query.filter_by(id=identity)

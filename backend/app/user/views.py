from app.user import users
from app.database import db
from app.auth.models import AuthModel
from app.user.models import User, TokenizedUser
from flask_apispec import use_kwargs, marshal_with
from app.exceptions import InvalidUsage
from sqlalchemy.exc import IntegrityError
from app.user.serializers import (user_schema,
    users_schema, tokenized_user_schema)
from flask_jwt_extended import (jwt_required,
    jwt_optional, current_user)


@users.route('/api/users/register', methods=('POST',))
@use_kwargs(user_schema)
@marshal_with(tokenized_user_schema)
def register(username, password, email, **kwargs):
  try:
    user = User.create(
      email=email,
      username=username,
      password=password,
      **kwargs
    )
  except IntegrityError:
    db.session.rollback()
    raise InvalidUsage.user_already_registered()
  auth = AuthModel.create(identity=user)
  return TokenizedUser(auth, user)


@users.route('/api/users/login', methods=('POST',))
@use_kwargs(user_schema)
@marshal_with(tokenized_user_schema)
@jwt_optional
def login(username, password, **kwargs):
  user = User.query.filter_by(username=username).first()
  if user is None:
    user = User.query.filter_by(email=username).first()
  if user is not None and user.check_password(password):
    auth = AuthModel.create(identity=user)
    return TokenizedUser(auth, user)
  raise InvalidUsage.user_not_found()


@users.route('/api/users', methods=('GET',))
@marshal_with(users_schema)
@jwt_required
def get_users():
  user = current_user
  return User.query.all()


@users.route('/api/users/recover', methods=('POST',))
@use_kwargs(user_schema)
def recover_password(username):
  user = User.query.filter_by(username=username).first()
  if user is None:
    user = User.query.filter_by(email=username).first()
  if user is None:
    raise InvalidUsage.user_not_found()
  raise NotImplemented


@users.route('/api/users', methods=('DELETE', ))
@use_kwargs(user_schema)
@jwt_required
def delete(**kwargs):
  raise NotImplemented

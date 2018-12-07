from app.user.serializers import schema
from app.user import users
from app.database import db
from app.user.models import User
from flask_apispec import use_kwargs, marshal_with
from app.exceptions import InvalidUsage
from sqlalchemy.exc import IntegrityError


@users.route('/api/users/register', methods=('POST',))
@use_kwargs(schema)
@marshal_with(schema)
def register(username, password, email, **kwargs):
  try:
    user = User(
      email=email,
      username=username,
      password=password,
      **kwargs
    ).save()
  except IntegrityError:
    db.session.rollback()
    raise InvalidUsage.user_already_registered()
  return user


@users.route('/api/users/login', methods=('POST',))
@use_kwargs(schema)
@marshal_with(schema)
def login(username, password, **kwargs):
  user = User.query.filter_by(username=username).first()
  if user is None:
    user = User.query.filter_by(email=username).first()
  if user is not None and user.check_password(password):
    return user
  raise InvalidUsage.user_not_found()

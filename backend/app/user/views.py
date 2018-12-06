from app.user.serializers import schema
from app.user import users
from app.database import db
from app.user.models import User
from flask_apispec import use_kwargs, marshal_with


@users.route('/api/users/register', methods=('POST',))
@use_kwargs(schema)
@marshal_with(schema)
def register(username, password, email, **kwargs):
  pass


@users.route('/api/users/login', methods=('POST',))
@use_kwargs(schema)
@marshal_with(schema)
def login(username, password):
  pass

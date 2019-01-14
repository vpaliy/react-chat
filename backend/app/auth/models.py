import datetime as dt

from flask_jwt_extended import create_access_token, create_refresh_token
from flask import current_app


class AuthModel(object):
  __slots__ = ('access_token', 'refresh_token', 'expires_at')

  def __init__(self, access_token, refresh_token, expires_at):
    self.access_token = access_token
    self.refresh_token = refresh_token
    self.expires_at = expires_at

  @classmethod
  def create(cls, identity):
    kwargs, config = {}, current_app.config
    kwargs['access_token']= create_access_token(identity=identity)
    kwargs['refresh_token'] = create_refresh_token(identity=identity)
    kwargs['expires_at'] = dt.datetime.utcnow() + config['JWT_ACCESS_TOKEN_EXPIRES']
    return cls(**kwargs)

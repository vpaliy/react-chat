import os
from collections import namedtuple

from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__name__))
load_dotenv(os.path.join(basedir, '.env'), verbose=True)

OAuthConfig = namedtuple('OAuthConfig', 'client_id, secret_id')

OAUTH_FACEBOOK_CONFIG = OAuthConfig(
  client_id = os.getenv('facebook-client-id'),
  secret_id = os.getenv('facebook-secret-id')
)

OAUTH_GOOGLE_CONFIG = OAuthConfig(
  client_id = os.getenv('google-client-id'),
  secret_id = os.getenv('google-secret-id')
)

class Config(object):
  SECRET_KEY = os.getenv('secret-key')
  SQLALCHEMY_TRACK_MODIFICATIONS = False
  JWT_SECRET_KEY = os.environ.get('jwt-secret-key')
  JWT_AUTH_USERNAME_KEY = 'email'
  JWT_AUTH_HEADER_PREFIX = 'Token'
  JWT_HEADER_TYPE = 'Token'
  MAIL_SERVER = os.environ.get('mail-server')
  MAIL_PORT = int(os.environ.get('mail-port') or 25)
  MAIL_USE_TLS = os.environ.get('mail-use-tls') is not None
  MAIL_USERNAME = os.environ.get('mail-username')
  MAIL_PASSWORD = os.environ.get('mail-password')
  OAUTH = dict(zip(('facebook', 'google'),
    (OAUTH_FACEBOOK_CONFIG, OAUTH_GOOGLE_CONFIG)))


class Production(Config):
  SQLALCHEMY_DATABASE_URI = os.environ.get('database-url') or \
        'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')


class Development(Config):
  DEBUG = True
  SQLALCHEMY_DATABASE_URI = os.environ.get('database-url') or \
        'sqlite:///' + os.path.join(basedir, 'data-dev.sqlite')


class Testing(Config):
  TESTING = True
  SQLALCHEMY_DATABASE_URI = os.environ.get('test-database-url') or \
        'sqlite:///' + os.path.join(basedir, 'data-test.sqlite')
  WTF_CSRF_ENABLED = False


config = {
  'development': Development,
  'production': Production,
  'testing': Testing
}

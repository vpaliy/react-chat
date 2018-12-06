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
  MAIL_SERVER = os.environ.get('MAIL_SERVER')
  MAIL_PORT = int(os.environ.get('MAIL_PORT') or 25)
  MAIL_USE_TLS = os.environ.get('MAIL_USE_TLS') is not None
  MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
  MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
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

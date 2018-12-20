from app.auth import auth
from app.auth.oauth import OAuthFactory
from flask import current_app
from app.auth.models import AuthModel
from app.auth.serializers import auth_schema
from app.exceptions import InvalidUsage
from flask_apispec import use_kwargs, marshal_with
from flask_jwt_extended import jwt_refresh_token_required, current_user


@auth.route('/authorize/<path:provider>')
def oauth_authorize(provider):
  oauth_config = current_app.config['OAUTH'][provider]
  provider = OAuthFactory.get_provider(provider, oauth_config)
  return provider.authorize()


@auth.route('/api/refresh')
@marshal_with(auth_schema)
@jwt_refresh_token_required
def refresh_token(**kwargs):
  user = current_user
  return AuthModel.create(user)

from app.auth import auth
from app.auth.oauth import OAuthFactory
from flask import current_app


@auth.route('/authorize/<path:provider>')
def oauth_authorize(provider):
  oauth_config = current_app.config['OAUTH'][provider]
  provider = OAuthFactory.get_provider(provider, oauth_config)
  return provider.authorize()

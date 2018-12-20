import os
import click

from app import create_app, db
from app.user.models import User
from app.rooms.models import Room
from config import config

configuration = config[os.getenv('flavor') or 'development']
app = create_app(configuration)

@app.shell_context_processor
def context():
  return {
    'db': db,
    'User': User,
    'Room': Room
  }


@app.cli.command()
def test():
  click.echo('Running tests...')
  import unittest
  tests = unittest.TestLoader().discover('tests')
  unittest.TextTestRunner(verbosity=2).run(tests)

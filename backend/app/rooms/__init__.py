from flask import Blueprint

rooms = Blueprint('rooms', __name__)

from views import *

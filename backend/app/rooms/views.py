from app.rooms import rooms
from app.database import db
from app.rooms.models import Room
from flask_apispec import use_kwargs, marshal_with
from app.exceptions import InvalidUsage
from sqlalchemy.exc import IntegrityError
from app.rooms.serializers import (room_schema, rooms_schema)
from flask_jwt_extended import (
  jwt_required, jwt_optional, create_access_token, current_user
)


@rooms.route('/api/rooms', methods=('GET', ))
@marshal_with(rooms_schema)
@jwt_required
def get_rooms():
  user = current_user
  return Room.query.all()

@rooms.route('/api/rooms', methods=('POST', ))
@use_kwargs(room_schema)
@jwt_required
def create_room(**kwargs):
  pass


@rooms.route('/api/rooms', methods=('DELETE', ))
@use_kwargs(room_schema)
def delete_room(id, **kwargs):
  pass


@rooms.route('/api/rooms', methods=('PUT', ))
@use_kwargs(room_schema)
def update_room(**kwargs):
  pass

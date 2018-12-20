from flask import jsonify


def template(message=str(), code=500):
    return {'message': message, 'status_code': code}

USER_NOT_FOUND = template('User not found', code=404)
USER_ALREADY_REGISTERED = template('User already registered', code=422)
ROOM_NOT_FOUND = template('Room not found', code=404)
ROOM_ALREADY_EXISTS = template('Room already exists', code=422)
UNKNOWN_ERROR = template(code=500)


class InvalidUsage(Exception):
  def __init__(self, message, status_code=None, payload=None):
    Exception.__init__(self)
    self.message = message
    if status_code is not None:
      self.status_code = status_code
    self.payload = payload

  def to_json(self):
    rv = dict(self.payload or ())
    rv['message'] = self.message
    return jsonify(rv)

  @classmethod
  def user_not_found(cls):
    return cls(**USER_NOT_FOUND)

  @classmethod
  def user_already_registered(cls):
    return cls(**USER_ALREADY_REGISTERED)

  @classmethod
  def room_already_exists(cls):
    return cls(**ROOM_ALREADY_EXISTS)

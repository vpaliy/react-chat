from app.database import Model, Column, SurrogatePK, db
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash

USER_ONLINE_TIMEOUT = 20

class User(SurrogatePK, Model):
  __tablename__ = 'users'

  username = Column(db.String(80), unique=True, nullable=False)
  email = Column(db.String(100), unique=True, nullable=False)
  _password = Column(db.String(128), nullable=False)
  bio = Column(db.String(300), nullable=True)
  image = Column(db.String(120), nullable=True)
  created_at = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
  updated_at = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
  seen_at = Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)

  @property
  def password(self):
    raise AttributeError('password is not readable')

  @property
  def is_online(self):
    now = datetime.datetime.now()
    return now > (self.seen_at +
      datetime.timedelta(seconds=USER_ONLINE_TIMEOUT))

  @password.setter
  def password(self, password):
    self._password = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self._password, password)

  def __repr__(self):
    return '<User {!r}>'.format(self.username)

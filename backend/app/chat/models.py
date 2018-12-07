from app.database import Model, Column, db, relationship

class Message(Model):
  __tablename__ = 'messages'

  content = Column(db.String(500), nullable=False)
  created_at = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
  author_id = Column(db.ForeignKey('users.id'), nullable=False)
  author = relationship('User', backref=db.backref('messages'))
  room_id = Column(db.ForeignKey('rooms.id'), nullable=False)
  room = relationship('Room', backref=db.backref('messages'))

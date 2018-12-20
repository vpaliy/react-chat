from app.database import Model, Column, SurrogatePK, db, relationship
import datetime as dt

class Room(SurrogatePK, Model):
  __tablename__ = 'rooms'

  name = Column(db.String(80), unique=True, nullable=False)
  description = Column(db.String(300), unique=True, nullable=False)
  image = Column(db.String(120), nullable=True)
  created_at = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
  updated_at = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)

from sqlalchemy.orm import relationship
from app import db

Column = db.Column
relationship = relationship
Model = db.Model

class SurrogatePK(object):
  __table_args__ = {'extend_existing': True}

  id = db.Column(db.Integer, primary_key=True)

  @classmethod
  def get_by_id(cls, record_id):
    if any((
      isinstance(record_id, str) and record_id.isdigit(),
      isinstance(record_id, (int, float))),
    ):
      return cls.query.get(int(record_id))

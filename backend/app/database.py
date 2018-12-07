from sqlalchemy.orm import relationship
from app import db

Column = db.Column
relationship = relationship

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


class Model(db.Model):
  __abstract__ = True

  @classmethod
  def create(cls, **kwargs):
    instance = cls(**kwargs)
    return instance.save()

  def save(self, commit=True):
    db.session.add(self)
    if commit:
      db.session.commit()
    return self

  def delete(self, commit=True):
    db.session.delete(self)
    return commit and db.session.commit()

  def update(self, commit=True, **kwargs):
    for attr, value in kwargs.items():
      setattr(self, attr, value)
    return commit and self.save()

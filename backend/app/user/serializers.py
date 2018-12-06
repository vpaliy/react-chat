from marshmallow import Schema, fields, pre_load, post_dump


class UserSchema(Schema):
  username = fields.Str()
  email = fields.Email()
  bio = fields.Str()
  image = fields.Url()
  token = fields.Str(dump_only=True)
  password = fields.Str(attribute='_password', load_only=True)
  createdAt = fields.DateTime(attribute='created_at', dump_only=True)
  updatedAt = fields.DateTime(attribute='updated_at')
  seenAt = fields.DateTime(attribute='seen_at', dump_only=True)
  user = fields.Nested('self', exclude=('user',), default=True, load_only=True)

  @post_dump
  def dump_user(self, data):
    return {'user': data}

  class Meta:
    strict = True


schema = UserSchema()
schemas = UserSchema(many=True)

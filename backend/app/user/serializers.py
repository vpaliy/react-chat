from marshmallow import Schema, fields, post_dump


class UserSchema(Schema):
  username = fields.Str()
  email = fields.Email()
  bio = fields.Str()
  image = fields.Url()
  password = fields.Str(load_only=True)
  createdAt = fields.DateTime(attribute='created_at', dump_only=True)
  updatedAt = fields.DateTime(attribute='updated_at')
  seenAt = fields.DateTime(attribute='seen_at', dump_only=True)
  user = fields.Nested('self', exclude=('user',), default=True, load_only=True)

  class Meta:
    strict = True


class TokenizedUserSchema(Schema):
  token = fields.Str(dump_only=True)
  user = fields.Nested(UserSchema)


user_schema = UserSchema()
users_schema = UserSchema(many=True)
tokenized_user_schema = TokenizedUserSchema()

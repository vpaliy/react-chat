from marshmallow import Schema, fields, post_dump
from app.auth.serializers import AuthSchema

class UserSchema(Schema):
  username = fields.Str()
  email = fields.Email()
  bio = fields.Str()
  image = fields.Url(attribute='avatar_url')
  password = fields.Str(load_only=True)
  createdAt = fields.DateTime(attribute='created_at', dump_only=True)
  updatedAt = fields.DateTime(attribute='updated_at')
  seenAt = fields.DateTime(attribute='seen_at', dump_only=True)
  user = fields.Nested('self', exclude=('user',), default=True, load_only=True)

  class Meta:
    strict = True


class TokenizedUserSchema(Schema):
  auth = fields.Nested(AuthSchema)
  user = fields.Nested(UserSchema)


user_schema = UserSchema()
users_schema = UserSchema(many=True)
tokenized_user_schema = TokenizedUserSchema()

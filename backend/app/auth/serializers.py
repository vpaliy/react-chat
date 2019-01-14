from marshmallow import Schema, fields, post_dump


class AuthSchema(Schema):
  access_token = fields.Str(dump_only=True)
  expires_at = fields.DateTime(dump_only=True)
  refresh_token = fields.Str(dump_only=True)

auth_schema = AuthSchema()

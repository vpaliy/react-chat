from marshmallow import Schema, fields, post_dump


class RoomSchema(Schema):
  roomName = fields.Str(attribute='name')
  description = fields.Str()
  image = fields.Url(attribute='avatar_url')
  createdAt = fields.DateTime(attribute='created_at', dump_only=True)
  updatedAt = fields.DateTime(attribute='updated_at')

  class Meta:
    strict = True


room_schema = RoomSchema()
rooms_schema = RoomSchema(many=True)

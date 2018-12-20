import React from "react";
import Room from "Profiles/Room";
import { List, Header, Wrapper } from "../styles";

const RoomList = ({ rooms, onRemove, onSelect }) =>
  rooms.length > 0 ? (
    <List>
      <Header>Rooms</Header>
      <Wrapper>{rooms.map(room => Room({ room, onRemove, onSelect }))}</Wrapper>
    </List>
  ) : null;

export default RoomList;

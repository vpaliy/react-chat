import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: none;
  display: flex;
  align-items: center;
  padding: 1rem;
  list-style: none;
  cursor: pointer;
  font-weight: bold;
  user-select: none;
  color: rgba(0, 0, 0, 0.38);

  :hover {
    background: rgba(0, 0, 0, 0.015);
    color: rgba(0, 0, 0, 0.5);
  }

  [disabled] {
    background: rgba(0, 0, 0, 0.015);
    color: rgba(0, 0, 0, 0.62);
  }
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  background: #e0e0e0;
`;

const Title = styled.span`
  display: block;
  white-space: nowrap;
  margin-left: 1rem;
`;

const Room = ({ room, onRemove, onSelect }) => (
  <Wrapper onClick={() => onSelect(room.id)} disabled={room.active}>
    <Image src={room.image} alt={room.roomName} />
    <Title>{room.roomName}</Title>
  </Wrapper>
);

export default Room;

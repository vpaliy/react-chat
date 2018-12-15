import React from 'react'
import Room from 'Profile/Room'
import styled from 'styled-components'

const List = styled.div`
  padding-bottom: 2rem;
  margin: 0;
  -webkit-overflow-scrolling: touch;
`

const Wrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  flex-direction: column-reverse;
`

const Header = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  margin-left: 0.8rem;
  font-weight: bold;
  text-align: left;
  color: rgba(0, 0, 0, 0.58);
`

const RoomList = ({ rooms, onRemove, onSelect }) => (
  rooms.length > 0 ? (
    <List>
      <Header>Rooms</Header>
      <Wrapper>
        {rooms.map(
          room => Room({ room, onRemove, onSelect })
        )}
      </Wrapper>
    </List>
  ) : null
)

export default RoomList

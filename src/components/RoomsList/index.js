import React from 'react'
import Room from '../Room'
import style from './index.module.css'

const RoomList = ({ rooms, onRemove, onSelect }) => (
  <div className={style.component}>
    <h3>Rooms</h3>
    {rooms.length > 0 ? (
      <wrapper->
        {rooms
          .map(room => Room({
             room, onRemove, onSelect
           }))}
      </wrapper->
    ) : ( null )}
  </div>
)

export default RoomList

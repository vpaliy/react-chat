import React from 'react'
import Room from '../Room'
import style from './index.module.css'

const RoomList = ({ rooms, onRemove, onSelect }) => (
  rooms.length > 0 ? (
    <div className={style.component}>
      <h3>Rooms</h3>
      <wrapper->
        {rooms.map(
          room => Room({ room, onRemove, onSelect })
        )}
      </wrapper->
    </div>
  ) : null
)

export default RoomList

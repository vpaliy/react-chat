import React from 'react'
import style from './index.module.css'

const Room = ({ room, onRemove, onSelect }) => (
  <div
    className={style.component}
    onClick={() => onSelect(room.id)}
    disabled={room.active}
    >
    <img src={room.avatarUrl} alt={room.roomName}/>
    <span>{room.roomName}</span>
  </div>
)

export default Room

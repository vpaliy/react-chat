import React from 'react'
import style from './index.module.css'

const ContactUser = ({ user, onRemove, onSelect }) => (
  <div
    className={style.component}
    onClick={() => onSelect(user.id)}
    disabled={user.active}
    >
    <img src={user.avatarUrl} alt={user.username}/>
    <span>{user.username}</span>
  </div>
)

export default ContactUser

import React from 'react'
import style from './index.module.css'

const ProfileHeader = ({ avatarUrl, username }) => (
  <header className={style.component}>
    <img src={avatarUrl} alt={username}/>
    <h3>{username}</h3>
  </header>
)

export default ProfileHeader

import React from 'react'
import style from './index.module.css'
import Message from '../Message/'

const emptyList = (
  <div className={style.empty}>
    <span role="img" aria-label="post">
      📝
    </span>
    <h2>No Messages Yet</h2>
    <p>Be the first to post in this room or invite someone to join the room</p>
  </div>
)

const MessageList = ({ messages = {}, user = {} }) => (
  <ul id="messages" className={style.component}>
    {messages.length > 0 ? (
      <wrapper->
        {messages
          .reverse()
          .map(message => Message({ user })(message))}
      </wrapper->
    ) : (
      emptyList
    )}
  </ul>
)

export default MessageList

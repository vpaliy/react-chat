import React from "react";
import style from "./index.module.css";
import Linkify from "react-linkify";

const time = string => {
  const date = new Date(string);
  const minutes = date.getMinutes();
  return `${date.getHours()}:${minutes < 10 ? "0" + minutes : minutes}`;
};

const Message = ({ user, createConvo }) => message => {
  return message.author ? (
    <li key={message.id} className={style.component}>
      <img
        onClick={e => createConvo({ user: message.author })}
        src="https://www.gravatar.com/avatar/ggdfgfdg123gdf?d=identicon&s=46"
      />
      <div>
        <span
          className={
            message.author.id === user.id ||
            (message.author.presence &&
              message.author.presence.state === "online")
              ? style.online
              : null
          }
        >{`${message.author.fullName} | ${time(message.time)}`}</span>
        <p>
          <Linkify properties={{ target: "_blank" }}>{message.content}</Linkify>
        </p>
      </div>
    </li>
  ) : null;
};

export default Message;

import Promise from "bluebird";
import { Users, People, Rooms } from "../requests";

export const fetchChat = () => dispatch => {
  dispatch({
    type: "fetch-chat-start"
  });
};

export const getChat = id => dispatch => {
  dispatch({
    type: "select-chat",
    id
  });
  Rooms.getChat(id).then(response => {
    dispatch({
      type: "fetch-chat-finish",
      payload: response
    });
  });
};

export const sendMessage = message => dispatch => {
  dispatch({
    type: "send-message",
    message
  });
};

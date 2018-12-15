import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import participants from "./participantsReducer";
import contacts from "./contactsReducer";
import chat from "./chatReducer";
import header from "./headerReducer";
import auth from "./authReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    auth,
    participants,
    header,
    contacts,
    chat
  });

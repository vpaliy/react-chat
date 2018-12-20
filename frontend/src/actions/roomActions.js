import Promise from "bluebird";
import { Users, Rooms, Contacts } from "@requests";

export const fetchContacts = () => dispatch => {
  dispatch({ type: "contacts-start" });
  Contacts.fetchContacts()
    .then(response => {
      dispatch({
        type: "contacts-finish",
        ...response
      });
    })
    .catch(error => {});
};

export const deleteContact = contact => dispatch => {
  dispatch({ type: "contacts-delete" });
};

export const deleteUser = () => dispatch => {};
export const deleteRoom = () => dispatch => {};

export const createRoom = room => dispatch => {
  Rooms.createRoom(room).then(response => {
    dispatch({ type: "create-room", room: response });
  });
};

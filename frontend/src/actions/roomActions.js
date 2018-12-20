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

export const deleteUser = () => dispatch => {}
export const deleteRoom = () => dispatch => {}
export const createRoom = () => dispatch => {}

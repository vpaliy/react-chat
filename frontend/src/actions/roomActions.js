import Promise from "bluebird";
import { Users, People, Rooms } from "@requests";

export const fetchContacts = () => dispatch => {
  dispatch({ type: "contacts-start" });
  Promise.join(
    People.getPeople(),
    Rooms.getRooms(),
    (peopleResponse, roomsResponse) => {
      dispatch({
        type: "contacts-finish",
        people: peopleResponse.payload,
        rooms: roomsResponse.payload
      });
    }
  );
};

export const deleteUser = (user, index) => dispatch => {
  dispatch({
    type: "delete-user-start",
    user
  });
  Users.delete(user).catch(error => {
    dispatch({
      type: "delete-user-failed",
      user,
      index
    });
  });
};

export const deleteRoom = (room, index) => dispatch => {
  dispatch({
    type: "delete-room-start",
    room
  });

  Rooms.delete(room).catch(error => {
    dispatch({
      type: "delete-room-failed",
      room,
      index
    });
  });
};

export const createRoom = name => dispatch => {
  dispatch({
    type: "create-room",
    name
  });
};

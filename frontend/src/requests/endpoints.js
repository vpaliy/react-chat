import Promise from "bluebird";
import { saveAuth as authBody } from "./jwt";
import requests from "./requests";
import SessionManager from "./authSession";

export const Rooms = {
  getRooms: () => requests.get("/rooms"),
  createRoom: room => requests.post("/rooms", { roomName: room })
};

export const Users = {
  getUsers: () => requests.get("/users"),
  addUser: user => requests.post("/users", { user })
};

export const Contacts = {
  fetchContacts: () =>
    Promise.join(Users.getUsers(), Rooms.getRooms(), (users, rooms) => ({
      people: users,
      rooms
    }))
};

export const Auth = {
  login: (username, password) =>
    requests.post("/users/login", { username, password }).then(authBody),

  register: (email, username, password) =>
    requests
      .post("/users/register", {
        email,
        username,
        password
      })
      .then(authBody),

  recover: email => requests.post("/users/recover", { email }),

  signOut: () => SessionManager.deauthenticateUser()
};

import Promise from "bluebird";
import requests from "./requests";

export const Rooms = {
  getRooms: () => requests.get("/rooms"),
  createRoom: room => requests.post("/rooms", { room })
};

export const Users = {
  getUsers: () => requests.get("/users"),
  addUser: user => requests.post("/users", { user })
};

export const Contacts = {
  fetchContacts: () =>
    Promise.join(Users.getUsers(), Rooms.getRooms(), (users, rooms) => ({
      users,
      rooms
    }))
};

export const Auth = {
  login: (username, password) =>
    requests.post("/users/login", { username, password }),

  register: (email, username, password) =>
    requests.post("/users/register", {
      email,
      username,
      password
    }),

  recover: email => requests.post("/users/recover", { email })
};

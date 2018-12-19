import requests from "./requests";

export const People = {};

export const Rooms = {
  getRooms: () => requests.get("/rooms"),
  addRoom: room => requests.post("/rooms", { room })
};

export const Users = {
  getUsers: () => requests.get("/users"),
  addUser: user => requests.post("/users", { user })
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

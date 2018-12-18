import requests from './requests'

export const People = {}
export const Rooms = {}
export const Users = {}

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

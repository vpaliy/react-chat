import {
  fetchContacts,
  deleteUser,
  deleteRoom,
  createRoom
} from "./roomActions";

import { fetchChat, getChat, sendMessage } from "./chatActions";

import { login, register, forgotPassword, signOut } from "./authActions";

import { fetchUser } from "./userActions";

export const actions = Object.assign({
  fetchContacts,
  deleteUser,
  deleteRoom,
  fetchChat,
  getChat,
  fetchUser,
  sendMessage,
  createRoom,
  login,
  register,
  forgotPassword,
  signOut
});

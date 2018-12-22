import { Auth } from "@requests";

const login = (username, password) => dispatch => {
  dispatch({ type: "login-start" });
  Auth.login(username, password)
    .then(response => {
      dispatch({
        type: "login-success",
        token: response.token,
        user: response.user
      });
    })
    .catch(error => {
      dispatch({
        type: "login-failure",
        error: error.message
      });
    });
};

const register = (email, username, password) => dispatch => {
  dispatch({ type: "register-start" });
  Auth.register(email, username, password)
    .then(response => {
      dispatch({
        type: "register-success",
        token: response.token,
        user: response.user
      });
    })
    .catch(error => {
      dispatch({
        type: "register-failure",
        error: error.message
      });
    });
};

const forgotPassword = email => dispatch => {
  dispatch({ type: "forgot-password-start" });
  Auth.forgotPassword(email)
    .then(response => {
      dispatch({});
    })
    .catch(error => {
      dispatch({ type: "forgot-password-failure" });
    });
};

const signOut = () => dispatch => {
  Auth.signOut();
  dispatch({ type: "sign-out" });
};

export { login, register, forgotPassword, signOut };

import SessionManager from "@requests/authSession";

const initialState = {
  token: SessionManager.getToken(),
  user: null,
  isLoading: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "sign-out":
      return {...state, token: null }
    case "login-start":
    case "register-start":
    case "forgot-password-start":
      return { ...state, isLoading: true };
    case "login-success":
    case "register-success":
      return {
        ...state,
        isLoading: false,
        user: action.user,
        token: action.token
      };
    case "login-failure":
    case "register-failure":
    case "forgot-password-failure":
      return {
        ...state,
        user: null,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default authReducer;

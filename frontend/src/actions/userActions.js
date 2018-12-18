import Promise from "bluebird";
import { Users } from "@requests";

const fetchUser = () => dispatch => {
  dispatch({ type: "fetch-user-start" });
  Users.getMe().then(response =>
    dispatch({
      type: "fetch-user-finished",
      payload: response.payload
    })
  );
};

export { fetchUser };

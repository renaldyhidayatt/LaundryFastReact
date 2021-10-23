import axios from "axios";
import { authService } from "../../service/auth.service";

export const registerUser = (user) => (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  axios
    .post("/users", user)
    .then((res) => {
      dispatch({ type: "USER_REGISTER_SUCCESS" });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: "USER_REGISTER_FAILED", payload: err });
      console.log(err);
    });
};

export const loginUser = (user) => (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  axios
    .post("/login", user)
    .then((res) => {
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: { user: res.data } });
      localStorage.setItem("user", JSON.stringify(res.data));

      window.location.href = "/";
    })
    .catch((err) => {
      dispatch({
        type: "USER_LOGIN_FAILED",
        payload: err,
      });
      console.log(err);
    });
};

export const signOut = () => {
  authService.logout();
  return (dispatch) => {
    dispatch({
      type: "USER_LOGOUT",
    });
    window.location.href = "/";
  };
};

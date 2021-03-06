import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNOUT,
  SET_MESSAGE,
} from "./actionTypes";

import authServices from "../services/authServices";

const signin = (username, password) => (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST, payload: { username, password } });
  return authServices.signin(username, password).then(
    (data) => {
      console.log(data);
      dispatch({ type: SIGNIN_SUCCESS, payload: { user: data } });
      return Promise.resolve();
    },
    (error) => {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({ type: SIGNIN_FAIL });
      dispatch({ type: SET_MESSAGE, payload: message });
      return Promise.reject();
    }
  );
};

const signout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: SIGNOUT });
};

const register = (data) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST, payload: data });
  return authServices.register(data).then(
    (response) => {
      dispatch({ type: REGISTER_SUCCESS, payload: data });
      dispatch({ type: SET_MESSAGE, payload: response.data.message });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({ type: REGISTER_FAIL });
      dispatch({ type: SET_MESSAGE, payload: message });
      return Promise.reject();
    }
  );
};

export default { register, signin, signout };

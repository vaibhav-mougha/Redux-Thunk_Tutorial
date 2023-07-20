import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./Auth.actionType";
import axios from "axios";

export const LogIn = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    let response = await axios.post("https://reqres.in/api/login", creds);
    dispatch({ type: LOGIN_SUCCESS, payload: await response.data });
  } catch (e) {
    dispatch({ type: LOGIN_ERROR, payload: e.message });
  }
};

export const LogOut = () => ({ type: LOGOUT });

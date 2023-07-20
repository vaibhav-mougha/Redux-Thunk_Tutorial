import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./Auth.actionType";

const token = localStorage.getItem("token") || "";

const initialState = {
  loading: false,
  error: "",
  isAuth: token ? true : false,
  token: token,
};

/*
(token ? true : false) this code we can also write like this (!!token) then this will become a boolean value
*/

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
        isAuth: false,
        token: "",
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
        isAuth: false,
        token: "",
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        error: "",
        isAuth: true,
        token: payload.token,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: "",
        isAuth: false,
        token: "",
      };
    }

    default: {
      return state;
    }
  }
};

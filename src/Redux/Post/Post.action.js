import {
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
} from "./Post.actionType";
import axios from "axios";

export const getPosts =()=> async (dispatch) => {
  dispatch({ type: GET_POST_LOADING });
  try {
    let response = await axios.get("http://localhost:8080/posts");
    dispatch({ type: GET_POST_SUCCESS, payload: (await response).data });
  } catch (e) {
    dispatch({ type: GET_POST_ERROR, payload: e.message });
  }
};

import {
  GET_Feeds_ERROR,
  GET_Feeds_LOADING,
  GET_Feeds_SUCCESS,
} from "./Feeds.actionType";
import axios from "axios";

export const getFeeds = () => async (dispatch) => {
  dispatch({ type: GET_Feeds_LOADING });
  try {
    let response = await axios.get("http://localhost:8080/feeds");
    dispatch({ type: GET_Feeds_SUCCESS, payload: (await response).data });
  } catch (e) {
    dispatch({ type: GET_Feeds_ERROR, payload: e.message });
  }
};

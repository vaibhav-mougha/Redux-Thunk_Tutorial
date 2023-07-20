import {
  GET_Feeds_ERROR,
  GET_Feeds_LOADING,
  GET_Feeds_SUCCESS,
} from "./Feeds.actionType";

const initialState = {
  loading: false,
  error: "",
  Feeds: [],
};

export const FeedsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_Feeds_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case GET_Feeds_SUCCESS: {
      return {
        ...state,
        Feeds: payload,
        loading: false,
        error: "",
      };
    }
    case GET_Feeds_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }

    default: {
      return state;
    }
  }
};

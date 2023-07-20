import {
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
} from "./Post.actionType";

const initialState = {
  loading: false,
  error: "",
  posts: [],
};

export const PostReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case GET_POST_SUCCESS: {
      return {
        ...state,
        posts:payload,
        loading: false,
        error: "",
      };
    }
    case GET_POST_ERROR: {
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

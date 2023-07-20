import { COUNTER_DEC, COUNTER_INC, COUNTER_RESET } from "./counter.actionTypes";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTER_INC: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    case COUNTER_DEC: {
      return {
        ...state,
        count: state.count - payload,
      };
    }
    case COUNTER_RESET: {
      return {
        ...state,
        count: 0,
      };
    }
    default: {
      return state;
    }
  }
};

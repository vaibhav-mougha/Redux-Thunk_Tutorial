import { COUNTER_DEC, COUNTER_INC, COUNTER_RESET } from "./counter.actionTypes";

export const increment = (payload = 1) => ({
  type: COUNTER_INC,
  payload,
});

export const decrement = (payload = 1) => ({
  type: COUNTER_DEC,
  payload,
});

export const reset = () => ({
  type: COUNTER_RESET,
});

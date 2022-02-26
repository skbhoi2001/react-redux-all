import { initialState } from "../counter/counter.constants";
import { COUNT_DECREMENT, COUNT_INCREMENT } from "./counter.actionTypes";

export const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case COUNT_INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case COUNT_DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};

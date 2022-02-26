import { initialState } from "../todos/todos.constants";
import { ADD_TODOS, DELETE_TODOS } from "./todos.actionTypes";

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODOS: {
      return {
        ...state,
        data: [...state.data, payload]
      };
    }
    case DELETE_TODOS: {
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== payload)
      };
    }

    default: {
      return state;
    }
  }
};

import { ADD_TODOS, DELETE_TODOS } from "./todos.actionTypes";
import { v4 as uuid } from "uuid";
export const addTodo = (value) => {
  return {
    type: ADD_TODOS,
    payload: {
      id: uuid(),
      value
    }
  };
};
export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODOS,
    payload: todoId
  };
};

import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../store/todos/todos.action";
import { ADD_TODOS } from "../../store/todos/todos.actionTypes";
export const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>TODOS</h1>
      <input
        type="text"
        placeholder="ADD"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(value));
          setValue("");
        }}
      >
        ADD
      </button>
    </div>
  );
};

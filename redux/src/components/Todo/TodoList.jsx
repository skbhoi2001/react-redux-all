import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/todos/todos.action";

export const TodoList = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>{todo.value}</div>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
};

import { useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const todos = useSelector((state) => state.todos.data);
  console.log(todos);
  return (
    <div>
      <TodoInput />
      <div>
        <h1>Todo List</h1>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <TodoList todo={todo} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

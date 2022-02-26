import { useDispatch, useSelector } from "react-redux";
import {
  COUNT_DECREMENT,
  COUNT_INCREMENT
} from "../../store/counter/counter.actionTypes";

export default function Counter() {
  let dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() =>
          dispatch({
            type: COUNT_INCREMENT
          })
        }
      >
        {" "}
        Add
      </button>
      <button
        onClick={() =>
          dispatch({
            type: COUNT_DECREMENT
          })
        }
      >
        {" "}
        Sub
      </button>
    </div>
  );
}

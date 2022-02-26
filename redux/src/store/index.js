import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducer";

const combineCompose = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

// export const store = createStore(reducer, combineCompose());
// const combineCompose = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const logger = (state) => (next) => (action) => {
  console.log("dispatching", action);
  console.log("state is", state.getState());
  let returnValue = next(action);
  console.log("new state", state.getState());

  return next(action);
};

export const store = createStore(
  reducer,
  combineCompose(applyMiddleware(logger))
);

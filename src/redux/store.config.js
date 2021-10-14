import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { listMovieReducer } from "./reducers/listMovieReducer";

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const store = createStore(
  combineReducers({
    listMovieReducer,
  }),
  applyMiddleware(thunk, logger)
);

export default store;

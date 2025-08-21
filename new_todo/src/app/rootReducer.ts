import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoslice";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;

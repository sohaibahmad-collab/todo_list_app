import { createSlice,type  PayloadAction } from "@reduxjs/toolkit";
import {type Todo } from "../../types/todo";

interface iTodoState {
  items: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: iTodoState = {
  items: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchTodos: (state) => { state.loading = true; },
    addTodo: (state, _action: PayloadAction<Omit<Todo, "_id">>) => { state.loading = true; },
    updateTodo: (state, _action: PayloadAction<Todo>) => { state.loading = true; },
    deleteTodo: (state, _action: PayloadAction<string>) => { state.loading = true; },

    fetchTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      state.loading = false;
      state.items = action.payload;
    },
    addTodoSuccess: (state, action: PayloadAction<Todo>) => {
      state.loading = false;
      state.items.push(action.payload);
    },
    updateTodoSuccess: (state, action: PayloadAction<Todo>) => {
      state.loading = false;
      state.items = state.items.map((t) =>
        t._id === action.payload._id ? action.payload : t
      );
    },
    deleteTodoSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.items = state.items.filter((t) => t._id !== action.payload);
    },
    failure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  fetchTodosSuccess,
  addTodoSuccess,
  updateTodoSuccess,
  deleteTodoSuccess,
  failure,
} = todoSlice.actions;

export default todoSlice.reducer;

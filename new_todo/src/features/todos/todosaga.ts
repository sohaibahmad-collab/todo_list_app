import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  fetchTodosSuccess,
  addTodoSuccess,
  updateTodoSuccess,
  deleteTodoSuccess,
  failure,
} from "./todoslice";
import {
  fetchTodosApi,
  addTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from "@services/todoApi";
import type { Todo } from "@models/todo";

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  return "Unexpected error occurred.";
}

function* fetchTodosWorker() {
  try {
    const todos: Todo[] = yield call(fetchTodosApi);
    yield put(fetchTodosSuccess(todos));
    toast.success("Todos fetched successfully!");
  } catch (err) {
    yield put(failure(getErrorMessage(err)));
    toast.error("Failed to fetch todos. Please try again!");
  }
}

function* addTodoWorker(action: ReturnType<typeof addTodo>) {
  try {
    const todo: Todo = yield call(addTodoApi, action.payload);
    yield put(addTodoSuccess(todo));
    toast.success("Todo added successfully!");
  } catch (err) {
    yield put(failure(getErrorMessage(err)));
    toast.error("Failed to add todo. Please try again!");
  }
}

function* updateTodoWorker(action: ReturnType<typeof updateTodo>) {
  try {
    const todo: Todo = yield call(updateTodoApi, action.payload);
    yield put(updateTodoSuccess(todo));
    toast.success("Todo updated successfully!");
  } catch (err) {
    yield put(failure(getErrorMessage(err)));
    toast.error("Failed to update todo. Please try again!");
  }
}

function* deleteTodoWorker(action: ReturnType<typeof deleteTodo>) {
  try {
    const id: string = yield call(deleteTodoApi, action.payload);
    yield put(deleteTodoSuccess(id));
    toast.success("Todo deleted successfully!");
  } catch (err) {
    yield put(failure(getErrorMessage(err)));
    toast.error("Failed to delete todo. Please try again!");
  }
}

export function* todoSaga() {
  yield takeLatest(fetchTodos.type, fetchTodosWorker);
  yield takeLatest(addTodo.type, addTodoWorker);
  yield takeLatest(updateTodo.type, updateTodoWorker);
  yield takeLatest(deleteTodo.type, deleteTodoWorker);
}

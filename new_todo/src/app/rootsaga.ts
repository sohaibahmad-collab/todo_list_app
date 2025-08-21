import { all } from "redux-saga/effects";
import { todoSaga } from "@features/todos/todosaga";

export default function* rootSaga() {
  yield all([todoSaga()]);
}

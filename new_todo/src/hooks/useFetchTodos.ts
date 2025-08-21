import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "@features/todos/todoslice"; // adjust path if needed

export function useFetchTodos() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Dispatching fetchTodos on mount...");
    dispatch(fetchTodos());
  }, [dispatch]);
}

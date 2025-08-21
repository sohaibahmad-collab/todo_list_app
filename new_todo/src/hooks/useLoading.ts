
import { useSelector } from "react-redux";
import { type RootState } from "@app/store";

export const useLoading = () => {
  const loading = useSelector((state: RootState) => state.todos.loading);
  return loading;
};

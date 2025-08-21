import { useSelector } from "react-redux";
import { type RootState } from "../app/store";

export const useTodos = () => {
  const { items } = useSelector((state: RootState) => state.todos);
  return items;
};


import { useSelector } from "react-redux";
import { type RootState } from "@app/store";

export const useLoading = () => {
  const { items } = useSelector((state: RootState) => state.todos);
  return items;
};

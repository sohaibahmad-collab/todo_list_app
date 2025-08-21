import { useDispatch } from "react-redux";
import { type AppDispatch } from "../app/store";
import { deleteTodo } from "../features/todos/todoslice";

export const useDeleteTodo = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return { handleDelete };
};

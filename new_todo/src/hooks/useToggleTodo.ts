import { useDispatch } from "react-redux";
import {type  AppDispatch } from "@app/store";
import { updateTodo } from "@features/todos/todoslice";

export const useToggleTodo = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = (id: string, title: string, completed: boolean) => {
    dispatch(updateTodo({ _id: id, title, completed: !completed }));
  };

  return { handleToggle };
};

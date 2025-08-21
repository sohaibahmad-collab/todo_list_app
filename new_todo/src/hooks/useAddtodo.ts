import { useState } from "react";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "@app/store";
import { toast } from "react-toastify";
import { addTodo } from "@features/todos/todoslice";

export const useAddTodo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (!newTask.trim()) {
      toast.error("Task cannot be empty!");
      return;
    }
    dispatch(addTodo({ title: newTask, completed: false }));
    setNewTask("");
  };

  return { newTask, setNewTask, handleAdd };
};

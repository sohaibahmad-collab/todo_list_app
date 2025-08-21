import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "../app/store";
import { toast } from "react-toastify";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../features/todos/todoslice";

export const useTodoActions = () => {
   const dispatch = useDispatch<AppDispatch>();
  const { items } = useSelector((state: RootState) => state.todos);

  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");


  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);


  const handleAdd = () => {
    if (!newTask.trim())
        {
             toast.error("Task cannot be empty!");
             return;
        } 
    dispatch(addTodo({ title: newTask, completed: false }));
    setNewTask("");
  };

  const handleToggle = (id: string, title: string, completed: boolean) => {
    dispatch(updateTodo({ _id: id, title, completed: !completed }));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleSaveEdit = (id: string, completed: boolean) => {
    if (!editText.trim()) return;
    dispatch(updateTodo({ _id: id, title: editText, completed }));
    setEditId(null);
    setEditText("");
  };

  const completedCount = items.filter((t) => t.completed).length;

  return {
    items,
    newTask,
    setNewTask,
    editId,
    setEditId,
    editText,
    setEditText,
    handleAdd,
    handleToggle,
    handleDelete,
    handleSaveEdit,
    completedCount,
  };
};

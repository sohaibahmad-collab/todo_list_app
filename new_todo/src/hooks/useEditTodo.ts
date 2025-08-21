// import { useState } from "react";
import { useDispatch } from "react-redux";
import {type  AppDispatch } from "@app/store";
import { updateTodo } from "@features/todos/todoslice";

export const useEditTodo = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const [editId, setEditId] = useState<string | null>(null);
  // const [editText, setEditText] = useState("");

  const handleSaveEdit = (id: string,editText:string, completed: boolean) => {
    if (!editText.trim()) return;
    dispatch(updateTodo({ _id: id, title: editText, completed }));
    console.log("Edit saved:", { id, title: editText, completed });
    // setEditId(null);
    // setEditText("");
  };

  return { handleSaveEdit };
};

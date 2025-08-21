import { API_BASE } from "../api";
import type { Todo } from "@models/todo";


export async function fetchTodosApi(): Promise<Todo[]> {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return res.json();
}


export async function addTodoApi(todo: Omit<Todo, "_id">): Promise<Todo> {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!res.ok) throw new Error("Failed to add todo");
  return res.json();
}


export async function updateTodoApi(todo: Todo): Promise<Todo> {
  const { _id, ...rest } = todo;
  
  const res = await fetch(`${API_BASE}/${_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rest),
  });
  if (!res.ok) throw new Error("Failed to update todo");
  return todo; 
}


export async function deleteTodoApi(_id: string): Promise<string> {
  const res = await fetch(`${API_BASE}/${_id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete todo");
  return _id;
}

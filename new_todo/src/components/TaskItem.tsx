import { Pencil, Trash2, Check } from "lucide-react";
import Button from "./Button";

type Props = {
  todo: { _id: string; title: string; completed: boolean };
  editId: string | null;
  editText: string;
  setEditId: (id: string | null) => void;
  setEditText: (text: string) => void;
  handleToggle: (id: string, title: string, completed: boolean) => void;
  handleDelete: (id: string) => void;
  handleSaveEdit: (id: string, completed: boolean) => void;
};
//types common

export default function TaskItem({
  todo,
  editId,
  editText,
  setEditId,
  setEditText,
  handleToggle,
  handleDelete,
  handleSaveEdit,
}: Props) {
  return (
    <div className="flex items-center justify-between border border-gray-700 rounded-lg p-3">
      {editId === todo._id ? (
        <div className="flex-1 flex items-center gap-2">
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSaveEdit(todo._id, todo.completed);
            }}
            className="flex-1 bg-gray-900 border border-gray-700 px-2 py-1 rounded-lg outline-none"
          />
          <Button
            variant="icon"
            onClick={() => handleSaveEdit(todo._id, todo.completed)}
          >
            <Check size={18} />
          </Button>
        </div>
      ) : (
        <>
          <div
            onClick={() => handleToggle(todo._id, todo.title, todo.completed)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div
              className={`w-5 h-5 rounded-full border-2 ${
                todo.completed
                  ? "bg-green-600 border-green-600"
                  : "border-green-600"
              }`}
            />
            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.title}
            </span>
          </div>

          <div className="flex gap-3">
            <Button
              variant="secondary"
              onClick={() => {
                setEditId(todo._id);
                setEditText(todo.title);
              }}
            >
              <Pencil size={18} />
            </Button>
            <Button variant="danger" onClick={() => handleDelete(todo._id)}>
              <Trash2 size={18} />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

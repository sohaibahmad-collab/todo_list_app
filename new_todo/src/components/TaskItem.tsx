// import { Pencil, Trash2, Check } from "lucide-react";
// import Button from "./Button";
// import { useEditTodo } from "@hooks/useEditTodo";
// import { useDeleteTodo } from "@hooks/useDeleteTodo";
// import { useToggleTodo } from "@hooks/useToggleTodo";
// import { useState } from "react";

// //  const { handleSaveEdit } = useEditTodo();
// //  const {handleDelete} = useDeleteTodo();
// // const { handleToggle } = useToggleTodo();

// type Props = {
//   todo: { _id: string; title: string; completed: boolean };
// };

// export default function TaskItem({ todo }: Props) {
//   const [editId, setEditId] = useState<string>("");
//   const [editText, setEditText] = useState<string>("");
//   const { handleSaveEdit } = useEditTodo();
//   const { handleDelete } = useDeleteTodo();
//   const { handleToggle } = useToggleTodo();

//   return (
//     <div className="flex items-center justify-between border border-gray-700 rounded-lg p-3">
//       {editId === todo._id ? (
//         <div className="flex-1 flex items-center gap-2">
//           <input
//             value={editText}
//             onChange={(e) => setEditText(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 handleSaveEdit(todo._id, editText, todo.completed);
//                 setEditId("");
//               }
//             }}
//             className="flex-1 bg-gray-900 border border-gray-700 px-2 py-1 rounded-lg outline-none"
//           />
//           <Button
//             variant="icon"
//             onClick={() => {
//               handleSaveEdit(todo._id, editText, todo.completed);
//               setEditId("");
//             }}
//           >
//             <Check size={18} />
//           </Button>
//         </div>
//       ) : (
//         <>
//           <div
//             onClick={() => handleToggle(todo._id, todo.title, todo.completed)}
//             className="flex items-center gap-2 cursor-pointer"
//           >
//             <div
//               className={`w-5 h-5 rounded-full border-2 ${
//                 todo.completed
//                   ? "bg-green-600 border-green-600"
//                   : "border-green-600"
//               }`}
//             />
//             <span
//               className={todo.completed ? "line-through text-gray-500" : ""}
//             >
//               {todo.title}
//             </span>
//           </div>

//           <div className="flex gap-3">
//             <Button
//               variant="secondary"
//               onClick={() => {
//                 setEditId(todo._id);
//                 setEditText(todo.title);
//               }}
//             >
//               <Pencil size={18} />
//             </Button>
//             <Button variant="danger" onClick={() => handleDelete(todo._id)}>
//               <Trash2 size={18} />
//             </Button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }


import { Pencil, Trash2, Check, Loader2 } from "lucide-react";
import Button from "./Button";
import { useEditTodo } from "@hooks/useEditTodo";
import { useDeleteTodo } from "@hooks/useDeleteTodo";
import { useToggleTodo } from "@hooks/useToggleTodo";
import { useState } from "react";

type Props = {
  todo: { _id: string; title: string; completed: boolean };
};

export default function TaskItem({ todo }: Props) {
  const [editId, setEditId] = useState<string>("");
  const [editText, setEditText] = useState<string>("");
  const [loading, setLoading] = useState(false); // ✅ local loading state

  const { handleSaveEdit } = useEditTodo();
  const { handleDelete } = useDeleteTodo();
  const { handleToggle } = useToggleTodo();

  const saveEdit = async () => {
    setLoading(true);
    try {
      await handleSaveEdit(todo._id, editText, todo.completed);
      setEditId("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-between border border-gray-700 rounded-lg p-3">
      {editId === todo._id ? (
        <div className="flex-1 flex items-center gap-2">
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveEdit();
            }}
            className="flex-1 bg-gray-900 border border-gray-700 px-2 py-1 rounded-lg outline-none"
            disabled={loading}
          />

          <Button variant="icon" onClick={saveEdit}>
            {loading ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <Check size={18} />
            )}
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
            <Button
              variant="danger"
              onClick={() => handleDelete(todo._id)}
              
            >
              <Trash2 size={18} />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

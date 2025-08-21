import TaskItem from "./TaskItem";
import { useTodos } from "../hooks/useTodos"

// type Props = {
//   items: { _id: string; title: string; completed: boolean }[];
// };

export default function TaskList() {
   const items = useTodos();
  return (

   
    <div className="flex flex-col gap-3 w-[400px]">
      {items.map((todo) => (
        <TaskItem
          key={todo._id}
          todo={todo}
          // editId={editId}
          // editText={editText}
          // setEditId={setEditId}
          // setEditText={setEditText}
          // handleToggle={handleToggle}
          // handleDelete={handleDelete}
          // handleSaveEdit={handleSaveEdit}
        />
      ))}
    </div>
  );
}

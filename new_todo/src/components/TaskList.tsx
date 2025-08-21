// import TaskItem from "./TaskItem";
// import { useTodos } from "../hooks/useTodos"
// import { useLoading } from "../hooks/useLoading";
// import Spinner from "./Spinner";
// // type Props = {
// //   items: { _id: string; title: string; completed: boolean }[];
// // };

// export default function TaskList() {
//    const items = useTodos();
//    const loading= useLoading();
//   return (
     
   
//     <div className="flex flex-col gap-3 w-[400px]">
//       {items.map((todo) => (
//         <TaskItem
//           key={todo._id}
//           todo={todo}
//           // editId={editId}
//           // editText={editText}
//           // setEditId={setEditId}
//           // setEditText={setEditText}
//           // handleToggle={handleToggle}
//           // handleDelete={handleDelete}
//           // handleSaveEdit={handleSaveEdit}
//         />
//       ))}
//     </div>
//   );
// }

import TaskItem from "./TaskItem";
import { useTodos } from "../hooks/useTodos";
import { useLoading } from "../hooks/useLoading";
import Spinner from "./Spinner";

export default function TaskList() {
  const items = useTodos();
  const loading = useLoading();
  

  return (
    <div className="flex flex-col gap-3 w-[400px]">
      {loading ? (
        <div className="flex items-center justify-center h-[200px]">
          <Spinner />
        </div>
      ) : items.length > 0 ? (
        items.map((todo) => <TaskItem key={todo._id} todo={todo} />)
      ) : (
        <p className="text-center text-gray-500">No todos found</p>
      )}
    </div>
  );
}

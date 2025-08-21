import TaskItem from "./TaskItem";

type Props = {
  items: { _id: string; title: string; completed: boolean }[];
  editId: string | null;
  editText: string;
  setEditId: (id: string | null) => void;
  setEditText: (text: string) => void;
  handleToggle: (id: string, title: string, completed: boolean) => void;
  handleDelete: (id: string) => void;
  handleSaveEdit: (id: string, completed: boolean) => void;
};

export default function TaskList({
  items,
  editId,
  editText,
  setEditId,
  setEditText,
  handleToggle,
  handleDelete,
  handleSaveEdit,
}: Props) {
  return (
    <div className="flex flex-col gap-3 w-[400px]">
      {items.map((todo) => (
        <TaskItem
          key={todo._id}
          todo={todo}
          editId={editId}
          editText={editText}
          setEditId={setEditId}
          setEditText={setEditText}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          handleSaveEdit={handleSaveEdit}
        />
      ))}
    </div>
  );
}

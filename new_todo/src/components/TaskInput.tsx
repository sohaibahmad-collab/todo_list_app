import { Plus } from "lucide-react";
import Button from "./Button";

type Props = {
  newTask: string;
  setNewTask: (value: string) => void;
  onAdd: () => void;
};

export default function TaskInput({ newTask, setNewTask, onAdd }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div className="flex items-center gap-2 w-[400px] mb-6">
      <input
        type="text"
        value={newTask}
        onKeyDown={handleKeyDown}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Write your next task"
        className="flex-1 bg-gray-900 border border-gray-700 px-4 py-2 rounded-lg outline-none"
      />
      <Button variant="primary" onClick={onAdd}>
        <Plus size={20} />
      </Button>
    </div>
  );
}

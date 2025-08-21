import { useTodos } from "@hooks/useTodos";
import { useCompletedCount } from "@hooks/useCompleteCount";

export default function StatusCard() {
  const items = useTodos();
  const completedCount = useCompletedCount();
  return (
    <div className="border border-gray-700 rounded-lg p-6 mb-8 flex items-center justify-between w-[400px]">
      <div>
        <h2 className="text-xl font-semibold">Task Done</h2>
        <p className="text-gray-400">Keep it up</p>
      </div>
      <div className="bg-green-600 text-black w-24 h-24 flex items-center justify-center rounded-full text-2xl font-bold">
        {completedCount}/{items.length}
      </div>
    </div>
  );
}

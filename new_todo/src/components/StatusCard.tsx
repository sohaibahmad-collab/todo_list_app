type Props = {
  completedCount: number;
  totalCount: number;
};

export default function StatusCard({ completedCount, totalCount }: Props) {
  return (
    <div className="border border-gray-700 rounded-lg p-6 mb-8 flex items-center justify-between w-[400px]">
      <div>
        <h2 className="text-xl font-semibold">Task Done</h2>
        <p className="text-gray-400">Keep it up</p>
      </div>
      <div className="bg-green-600 text-black w-24 h-24 flex items-center justify-center rounded-full text-2xl font-bold">
        {completedCount}/{totalCount}
      </div>
    </div>
  );
}

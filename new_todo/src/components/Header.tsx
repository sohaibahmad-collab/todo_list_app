import { CheckSquare } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center gap-2 mb-10">
      <CheckSquare size={32} />
      <h1 className="text-3xl font-bold">TODO</h1>
    </div>
  );
}

import { useTodos } from "./useTodos";

export const useCompletedCount = () => {
  const items = useTodos();
  return items.filter((t) => t.completed).length;
};

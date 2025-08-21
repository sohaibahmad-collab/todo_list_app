import Header from "@components/Header";
import StatusCard from "@components/StatusCard";
import TaskInput from "@components/TaskInput";
import TaskList from "@components/TaskList";
import { useFetchTodos } from "@hooks/useFetchTodos";
// import { useTodoActions } from "./hooks/useTodoAction";

function App() {
    useFetchTodos(); 
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <Header />
      <StatusCard  />
      <TaskInput />
      <TaskList
        // items={items}
        // editId={editId}
        // editText={editText}
        // setEditId={setEditId}
        // setEditText={setEditText}
        // handleToggle={handleToggle}
        // handleDelete={handleDelete}
        // handleSaveEdit={handleSaveEdit}
      />
    </div>
  );
}

export default App;

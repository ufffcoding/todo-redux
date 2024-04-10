import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="py-10 w-screen flex flex-col items-center gap-4 px-4">
      <TodoForm />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;

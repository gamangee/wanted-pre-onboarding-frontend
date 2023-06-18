import { useState } from "react";
import { TodoProps } from "../../types/todoType";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

export default function Todo() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div className="border-2 border-black rounded-lg p-5 w-5/6">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        <CreateTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

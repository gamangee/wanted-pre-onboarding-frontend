import { useState } from "react";
import { TodoProps } from "../../types/todoType";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";

export default function Todo() {
  const [todos, setTodos] = useState<TodoProps[]>([
    {
      id: 1,
      todo: "todo_01",
      isCompleted: false,
      userId: 11,
    },
    {
      id: 2,
      todo: "todo_02",
      isCompleted: false,
      userId: 22,
    },
    {
      id: 3,
      todo: "todo_03",
      isCompleted: false,
      userId: 33,
    },
    {
      id: 4,
      todo: "todo_04",
      isCompleted: false,
      userId: 44,
    },
    {
      id: 5,
      todo: "todo_05",
      isCompleted: false,
      userId: 55,
    },
  ]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div className="border-2 border-black rounded-lg p-5 w-5/6">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        <CreateTodo />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

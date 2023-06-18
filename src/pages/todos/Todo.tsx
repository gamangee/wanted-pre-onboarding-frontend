import { useContext, useEffect, useState } from "react";
import { TodoProps } from "../../types/todoType";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { getTodosApi } from "../../service/todoAPI";

export default function Todo() {
  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

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

  const getTodos = async () => {
    try {
      const response = await getTodosApi();
      if (response.status !== 200) {
        return;
      }
      setTodos(response.data);
    } catch (error: any) {
      alert("오류가 발생했습니다.");
      console.log(error.response.data.message);
    }
  };

  // Assignment 4
  // 로컬스토리지에 토큰이 없는 상태에 투두리스트 페이지 접속 시 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signin");
    }
  });

  useEffect(() => {
    getTodos();
  }, []);

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

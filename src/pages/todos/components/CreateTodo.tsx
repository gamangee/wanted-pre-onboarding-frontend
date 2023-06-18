import { useState } from "react";
import { CreateTodoProp } from "../../../types/todoType";
import { createTodoApi } from "../../../service/todoAPI";

export default function CreateTodo({ setTodos }: CreateTodoProp) {
  const [newTodo, setNewTodo] = useState<string>("");

  // 투두 입력
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  // Assignment 6
  // 새로운 TODO를 입력하고 추가 버튼을 누르면 내용이 추가되도록 구현
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTodo.trim() === "") {
      alert(`할일을 입력해주세요!`);
    } else {
      try {
        const response = await createTodoApi(newTodo);
        if (response.status !== 201) {
          alert("할일 추가에 실패했습니다.");
          return;
        }
        setTodos((todos) => [...todos, response.data]);
      } catch (error: any) {
        alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
        console.log(error.response.data.message);
      } finally {
        setNewTodo("");
      }
    }
  };

  return (
    <form className="flex space-x-2 mt-4" onSubmit={handleSubmit}>
      <input
        data-testid="new-todo-input"
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        className="w-4/5 border border-blue-500 rounded-md px-4 py-2 focus:border-blue-500"
      />
      <button
        data-testid="new-todo-add-button"
        type="submit"
        className="w-1/5 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
      >
        추가
      </button>
    </form>
  );
}

import { useState } from "react";

export default function CreateTodo() {
  const [newTodo, setNewTodo] = useState<string>("");

  // 투두 입력
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  // 투두 추가
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

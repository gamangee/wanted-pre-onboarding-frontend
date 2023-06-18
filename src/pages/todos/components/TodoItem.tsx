import { useState } from "react";
import { deleteTodoApi, updateTodoApi } from "../../../service/todoAPI";
import { TodoItemProps, UpdateTodoProps } from "../../../types/todoType";

export default function TodoItem({
  id,
  todo,
  isCompleted,
  setTodos,
}: TodoItemProps) {
  // 수정 모드
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  // 수정한 투두 업데이트
  const [updatedTodo, setUpdatedTodo] = useState<string>(todo);

  // 수정 모드 활성화
  const handleEdit = () => {
    setIsEditMode(true);
  };

  // 수정 모드 취소
  const handleCancel = () => {
    // 수정 모드 비활성화
    setIsEditMode(false);
    // 수정 내용 초기화
    setUpdatedTodo(todo);
  };

  // 수정 입력
  const onChangeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTodo(event.target.value);
  };

  // Assignment 7
  // 체크박스를 통해 할일 완료 여부 수정
  const handleCheckboxChange = async () => {
    try {
      const updateTodoState: UpdateTodoProps = {
        todo,
        isCompleted: !isCompleted,
      };
      const response = await updateTodoApi(id, updateTodoState);
      if (response.status !== 200) {
        alert("체크 변경을 실패했습니다.");
        return;
      }
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === response.data.id ? response.data : todo
        )
      );
    } catch (error: any) {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
      console.log(error.response.data.message);
    }
  };

  // Assignment 10 수정 기능
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const updateTodoText: UpdateTodoProps = {
        todo: updatedTodo,
        isCompleted,
      };

      const response = await updateTodoApi(id, updateTodoText);

      if (response.status !== 200) {
        alert("수정하는데 실패했습니다.");
        return;
      }

      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === response.data.id ? response.data : todo
        )
      );

      setIsEditMode(false);
    } catch (error: any) {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
      console.log(error.response.data.message);
    }
  };

  // Assignment 9 삭제 기능
  const handleDelete = async () => {
    try {
      const response = await deleteTodoApi(id);

      if (response.status !== 204) {
        alert("삭제를 실패했습니다.");
        return;
      }

      alert("할일이 삭제되었습니다!");
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    } catch (error: any) {
      alert(`오류가 발생했습니다.\n다시 시도해주세요.`);
      console.log(error.response.data.message);
    }
  };

  return (
    <li className="p-4 border-b last:border-none">
      {isEditMode ? (
        <form
          className="flex justify-between items-center space-x-2"
          onSubmit={handleSubmit}
        >
          <div className="w-4/5">
            <input
              data-testid="modify-input"
              type="text"
              value={updatedTodo}
              onChange={onChangeTodo}
              className="rounded border border-green-500 px-4 py-1 w-full focus:outline-green-500"
            />
          </div>
          <div className="w-1/5">
            <button
              data-testid="submit-button"
              type="submit"
              className="mr-2 bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
            >
              제출
            </button>
            <button
              data-testid="cancel-button"
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
            >
              취소
            </button>
          </div>
        </form>
      ) : (
        <div className="flex justify-between items-center space-x-2">
          <div className="w-4/5">
            <label className="flex items-center space-x-1 cursor-pointer">
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleCheckboxChange}
              />
              <span className={isCompleted ? "line-through" : ""}>{todo}</span>
            </label>
          </div>
          <div className="w-1/5">
            <button
              onClick={handleEdit}
              data-testid="modify-button"
              className="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded"
            >
              수정
            </button>
            <button
              onClick={handleDelete}
              data-testid="delete-button"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
            >
              삭제
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

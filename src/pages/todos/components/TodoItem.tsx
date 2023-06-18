import { deleteTodoApi } from "../../../service/todoAPI";
import { TodoItemProps } from "../../../types/todoType";

export default function TodoItem({
  id,
  todo,
  isCompleted,
  setTodos,
}: TodoItemProps) {
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
      {/* Assignment 5 */}
      {/* li,label,input,span 태그 사용 */}
      <div className="flex justify-between items-center space-x-2">
        <div>
          <label className="flex items-center space-x-1 cursor-pointer">
            {/* Assignment 7 */}
            {/* 체크박스를 통해 할일 완료 여부 수정 */}
            <input type="checkbox" checked={isCompleted} />
            <span className={isCompleted ? "line-through" : ""}>{todo}</span>
          </label>
        </div>
        <div>
          {/* Assignment 8 */}
          {/* 수정, 삭제 버튼 속성 부여 */}
          <button
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
    </li>
  );
}

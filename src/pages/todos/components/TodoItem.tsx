import { TodoItemProps } from "../../../types/todoType";

export default function TodoItem({
  id,
  todo,
  isCompleted,
  setTodos,
}: TodoItemProps) {
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
          <button
            data-testid="modify-button"
            className="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded"
          >
            수정
          </button>
          <button
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

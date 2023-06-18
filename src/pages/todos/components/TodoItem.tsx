import { TodoItemProps } from "../../../types/todoType";

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="p-4 border-b last:border-none">
      <div className="flex justify-between items-center space-x-2">
        <div>
          <label className="flex items-center space-x-1 cursor-pointer">
            <input type="checkbox" />
            <span>{todo}</span>
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

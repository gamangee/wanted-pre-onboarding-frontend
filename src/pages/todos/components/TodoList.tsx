import { TodoListProps, TodoProps } from "../../../types/todoType";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }: TodoListProps) {
  return (
    <div className="mt-4">
      <ul className="mt-5">
        {todos.length > 0 ? (
          todos.map((todo: TodoProps) => (
            <TodoItem key={todo.id} todo={todo.todo} />
          ))
        ) : (
          <li className="text-center h-[200px] flex justify-center items-center">
            <div>
              <p className="text-gray-400">할일이 없습니다.</p>
              <p className="font-medium">
                새로운 할일을 <span className="text-red-500">추가</span>
                해주세요!
              </p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

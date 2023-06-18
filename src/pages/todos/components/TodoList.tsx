import { TodoListProps, TodoProps } from "../../../types/todoType";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }: TodoListProps) {
  return (
    <div className="mt-4">
      <ul className="mt-5">
        {todos.map((todo: TodoProps) => (
          <TodoItem key={todo.id} todo={todo.todo} />
        ))}
      </ul>
    </div>
  );
}

import { TodoListProps } from "../../../types/todoType";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <div>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

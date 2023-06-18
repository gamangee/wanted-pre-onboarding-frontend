export interface TodoProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodoListProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

export interface CreateTodoProp {
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

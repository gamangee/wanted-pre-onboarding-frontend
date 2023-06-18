export interface TodoProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodoListProps {
  todos: TodoProps[];
}

export interface TodoItemProps {
  todo: string;
}

export interface UpdateTodoProps {
  todo: string;
  isCompleted: boolean;
}

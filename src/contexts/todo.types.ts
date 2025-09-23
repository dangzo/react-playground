export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoPayload {
  id: number;
  text?: string;
  completed?: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

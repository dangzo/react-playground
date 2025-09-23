import type { Todo, TodoContextType, TodoPayload } from "./todo.types";

import { createContext, useReducer } from "react";

function todoReducer(state: Todo[], action: { type: string; payload: TodoPayload }): Todo[] {
  const { id, text = '', completed = false } = action.payload;

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id, text, completed }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (text: string) => {
    const [id, completed] = [Date.now(), false];
    dispatch({ type: 'ADD_TODO', payload: { id, text, completed } });
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  const removeTodo = (id: number) => {
    dispatch({ type: 'REMOVE_TODO', payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
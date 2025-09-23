import type { TodoContextType } from "./todo.types";
import { todoReducer } from "./todoReducer";
import { createContext, useReducer } from "react";

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

import { useContext } from 'react';
import { TodoContext } from '../contexts/todo';
import { TodoAdd } from './TodoAdd';

export const TodoList = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return <div>Loading...</div>;
  }

  return <>
    <TodoAdd />

    <ul>
      {todoContext.todos.map(todo => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => todoContext.toggleTodo(todo.id)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => todoContext.removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  </>;
};

import { useContext } from 'react';
import { TodoContext } from '../../contexts/todo';
import { TodoAdd } from './TodoAdd';

export const TodoList = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return <div>Loading...</div>;
  }

  return (
    <div className='w-[600px] flex flex-col'>
      <TodoAdd />

      <ul>
        {todoContext.todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-x-2 mb-1">
            <input type="checkbox" checked={todo.completed} onClick={() => todoContext.toggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className="flex-1 text-left">
              {todo.text}
            </span>
            <button onClick={() => todoContext.removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useContext } from 'react';
import { TodoContext } from '../contexts/todo';

export const TodoList = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    return <div>Loading...</div>;
  }

  function handleAddTodo() {
    if (!todoContext) {
      return;
    }

    const input = document.getElementById('new-todo-text') as HTMLInputElement;
    if (input.value.trim()) {
      todoContext.addTodo(input.value.trim());
      input.value = '';
    }
  }

  return <>
    <div>
      <input type="text" id="new-todo-text" placeholder="Type here" className="border p-2 mr-2" />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>

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
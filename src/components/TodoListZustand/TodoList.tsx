import { useTodoStore } from '@/stores/zustand-store';
import TodoAdd from './TodoAdd';

const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useTodoStore();

  return (
    <div className="flex flex-col">
      <TodoAdd />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-x-2 mb-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onClick={() => toggleTodo(todo.id)}
              onChange={() => null}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              className="flex-1 text-left"
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

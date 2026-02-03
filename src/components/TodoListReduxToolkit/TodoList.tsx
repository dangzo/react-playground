import type { RootState } from '@/stores/redux-store';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleTodo as toggleTodoAction,
  removeTodo as removeTodoAction,
} from '@/stores/redux-features/todo-slice';
import TodoAdd from './TodoAdd';

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const toggleTodo = (id: number) => dispatch(toggleTodoAction(id));
  const removeTodo = (id: number) => dispatch(removeTodoAction(id));

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

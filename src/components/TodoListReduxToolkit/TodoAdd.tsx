import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo as addTodoAction } from '@/stores/redux-features/todo-slice';

const TodoAdd = () => {
  const dispatch = useDispatch();
  const addTodo = (text: string) => dispatch(addTodoAction(text));

  const inputRef = useRef<HTMLInputElement>(null);

  function handleOnKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  }

  function handleAddTodo() {
    if (inputRef.current) {
      addTodo(inputRef.current.value.trim());
      inputRef.current.value = '';
    }
  }

  return (
    <div className="flex flex-row mb-4">
      <input
        ref={inputRef}
        type="text"
        id="new-todo-text"
        placeholder="Type here"
        className="border p-2 mr-2 flex-1"
        onKeyUp={handleOnKeyDown}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoAdd;

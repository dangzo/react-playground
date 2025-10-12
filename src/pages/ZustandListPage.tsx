import { TodoList } from '@/components/TodoListZustand';

const TodoListZustandPage = function () {
  return (
    <div className="flex flex-col w-full p-20">
      <header>
        <h1 className="text-left mb-8">Zustand</h1>
      </header>
      <TodoList />
    </div>)
}

export default TodoListZustandPage;
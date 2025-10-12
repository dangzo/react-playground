import { TodoList } from "@/components/TodoListContext";
import { TodoProvider } from "@/contexts/todo";

const TodoListContextPage = function () {
  return (
    <div className="flex flex-col w-full">
      <header>
        <h1 className="text-left mb-8">Context API</h1>
      </header>

      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>)
}

export default TodoListContextPage;
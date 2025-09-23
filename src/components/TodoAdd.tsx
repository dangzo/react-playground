import { useContext } from "react";
import { TodoContext } from "../contexts/todo";

export const TodoAdd = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw new Error("TodoAdd must be used within a TodoProvider");
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

  return (
    <div>
      <input type="text" id="new-todo-text" placeholder="Type here" className="border p-2 mr-2" />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
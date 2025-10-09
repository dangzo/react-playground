import './App.css'
import { TodoList as TodoListContext } from './components/TodoListContext/TodoList'
import { TodoProvider } from './contexts/todo'

function App() {
  return (
    <TodoProvider>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-full p-20">
          <header>
            <h1 className="text-left mb-8">Context API</h1>
          </header>
          <TodoListContext />
        </div>
        <div className="flex flex-col w-full p-20">
          <header>
            <h1 className="text-left mb-8">Context API</h1>
          </header>
          <TodoListContext />
        </div>
      </div>
    </TodoProvider>
  )
}

export default App

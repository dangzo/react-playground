import './App.css'
import { TodoList } from './components/TodoList'
import { TodoProvider } from './contexts/todo'

function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  )
}

export default App

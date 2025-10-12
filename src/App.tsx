import { Routes } from './routes'
import './App.css'

function App() {
  return (
    <Routes />

    /* <Routes /> 
    <div className="flex flex-row justify-between">
      <div className="flex flex-col w-full p-20">
        <header>
          <h1 className="text-left mb-8">Context API</h1>
        </header>
        <TodoProvider>
          <TodoListContext />
        </TodoProvider>
      </div>

      <div className="flex flex-col w-full p-20">
        <header>
          <h1 className="text-left mb-8">Zustand</h1>
        </header>
        <TodoListZustand />
      </div>
    </div>
    */
  )
}

export default App

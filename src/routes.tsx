import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import IndexPage from './pages/IndexPage';
import TodoListZustandPage from './pages/TodoListPage';
import TodoListContextPage from './pages/TodoListContextPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/zustand-list",
    element: <TodoListZustandPage />,
  },
  {
    path: "/context-list",
    element: <TodoListContextPage />,
  },
]);

export const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}
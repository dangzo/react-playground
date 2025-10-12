import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import IndexPage from './pages/IndexPage';
import TodoListZustandPage from './pages/TodoListPage';
import TodoListContextPage from './pages/TodoListContextPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: IndexPage,
  },
  {
    path: "/zustand-list",
    Component: TodoListZustandPage,
  },
  {
    path: "/context-list",
    Component: TodoListContextPage,
  },
]);

export const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}
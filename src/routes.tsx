import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import IndexPage from './pages/IndexPage';
import ZustandListPage from './pages/ZustandListPage';
import ContextListPage from './pages/ContextListPage';

const router = createBrowserRouter([
  {
    path: "/",
    Component: IndexPage,
  },
  {
    path: "/zustand-list",
    Component: ZustandListPage,
  },
  {
    path: "/context-list",
    Component: ContextListPage,
  },
]);

export const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}
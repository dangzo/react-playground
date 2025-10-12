import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import DefaultLayout from './layouts/Default';
import IndexPage from './pages/IndexPage';
import ZustandListPage from './pages/ZustandListPage';
import ContextListPage from './pages/ContextListPage';

const routes = [
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        index: true,
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
    ]
  },
];

const AppRouter = function () {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />
}



export default AppRouter;
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

const Root = lazy(() => import('./routes/Root'));
const Error = lazy(() => import('./routes/Error'));
const Archive = lazy(() => import('./routes/Archive'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Root />
      },
      {
        path: '/archive',
        element: <Archive />,
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
]);

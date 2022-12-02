import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

const Root = lazy(() => import('./routes/Root'));
const Error = lazy(() => import('./routes/Error'));

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
        path: '*',
        element: <Error />
      }
    ]
  }
]);

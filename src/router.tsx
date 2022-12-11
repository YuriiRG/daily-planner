import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

const Root = lazy(() => import('./routes/Root'));
const Error = lazy(() => import('./routes/Error'));
const Archive = lazy(() => import('./routes/Archive'));
const ArchiveDay = lazy(() => import('./routes/ArchiveDay'));
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
        path: '/archive/:dayId',
        element: <ArchiveDay />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
]);

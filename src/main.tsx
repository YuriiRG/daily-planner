import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root';
import Error from './routes/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './assets/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

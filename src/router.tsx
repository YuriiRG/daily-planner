import Root from './routes/Root';
import Error from './routes/Error';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

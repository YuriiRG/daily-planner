import Root from './routes/Root';
import Error from './routes/Error';
import { createBrowserRouter } from 'react-router-dom';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

import { ReactNode, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './Loader';

export default function Layout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header>
        <Navbar />
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

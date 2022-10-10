import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function Layout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
}

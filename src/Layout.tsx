import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
}

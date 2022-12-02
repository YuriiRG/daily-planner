import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export type NavbarItemProps = {
  path?: string;
  children: ReactNode;
};

export default function NavbarItem({ path = '#', children }: NavbarItemProps) {
  return (
    <NavLink
      end
      to={path}
      className={({ isActive }) =>
        'rounded-lg px-4 py-2 font-bold' + ' ' + (isActive ? 'bg-blue-400' : '')
      }
    >
      {children}
    </NavLink>
  );
}

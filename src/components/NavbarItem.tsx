import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export type NavbarItemProps = {
  path?: string;
  children: ReactNode;
};

export default function NavbarItem({
  path = '#',
  children,
}: NavbarItemProps) {
  return <li>{children}</li>;
}

import Logo from './Logo';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <nav className='flex flex-row items-center gap-4 p-4'>
      <Logo />
      <NavbarItem path='/'>Today</NavbarItem>
      <NavbarItem path='/permanent'>Permanent</NavbarItem>
      <NavbarItem path='/archive'>Archive</NavbarItem>
    </nav>
  );
}

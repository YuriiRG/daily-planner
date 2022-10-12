import { useState } from 'react';
import Hamburger from './Hamburger';
import Logo from './Logo';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  const [isFolded, setIsFolded] = useState(false);
  const items = (
    <>
      <NavbarItem path='/'>Today</NavbarItem>
      <NavbarItem path='/permanent'>Permanent</NavbarItem>
      <NavbarItem path='/archive'>Archive</NavbarItem>
    </>
  );
  return (
    <>
      <nav className='flex flex-row items-center gap-4 p-4'>
        <div className='flex'>
          <Logo className='h-10 w-10' />
          <Hamburger
            className='block h-10 w-10 sm:hidden'
            onClick={() => setIsFolded((f) => !f)}
          />
        </div>
        <div className='flex flex-row items-center gap-4'>
          {items}
        </div>
      </nav>
    </>
  );
}

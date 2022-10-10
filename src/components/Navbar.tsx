import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <nav className='flex flex-row gap-4'>
      Logo
      <ul className='flex flex-row gap-4'>
        <NavbarItem>NavLink</NavbarItem>
        <NavbarItem>NavLink2</NavbarItem>
      </ul>
    </nav>
  );
}

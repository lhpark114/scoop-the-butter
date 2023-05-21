import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';

export default function Navbar() {
  return (
    <header className='block'>
      <Link to='/'>
        <h1>SCOOP THE BUTTER</h1>
      </Link>
      <nav className='flex justify-between'>
        <Link to='/products'>Our Cakes</Link>
        <Link to='/about'>About</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/location'>Location</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='products/new'>
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
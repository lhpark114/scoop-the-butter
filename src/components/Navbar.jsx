import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill } from 'react-icons/bs';
import {login} from '../api/firebase';

export default function Navbar() {
  return (
    <header className='block border-b border-gray-300 p-3'>
      <Link to='/' className='flex my-8 text-center text-5xl text-brand'>
        <h1>SCOOP THE BUTTER</h1>
      </Link>
      <nav className='flex justify-between items-center mx-12 gap-2 font-semibold'>
        <Link to='/products'>Our Cakes</Link>
        <Link to='/about'>About</Link>
        <Link to='/gallery'>Gallery</Link>
        <Link to='/location'>Location</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='products/new'>
          <BsFillPencilFill />
        </Link>
        <button onClick={login}>Login</button>
      </nav>
    </header>
  );
}

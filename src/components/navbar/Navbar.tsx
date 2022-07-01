import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="text-white w-full">
        <div className="container flex flex-wrap flex-row justify-end items-center gap-4 w-full">
            <NavLink to="" className='p-2 flex flex-wrap flex-column items-center justify-center hover:text-gray-50' title='Home'>
              <span>Home</span>
            </NavLink>
            <NavLink to="/about" className='p-2 flex flex-wrap flex-column items-center justify-center hover:text-gray-50' title='About'>
              <span>About</span>
            </NavLink>
            <NavLink to="/contact" className='p-2 flex flex-wrap flex-column items-center justify-center hover:text-gray-50' title='Contact'>
              <span>Contact</span>
            </NavLink>
        </div>
    </nav>
  )
}

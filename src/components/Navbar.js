import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
   
   <nav className='  flex justify-around font-sans bg-gradient-to-r from-cyan-200 to-blue-400 h-16 items-center'>
    <h1 className='text-2xl'>Suites</h1>
    <ul className='space-x-7 ml-96  '>
        <NavLink className='hover:text-white' to='/'>HOME</NavLink>
        <NavLink className='hover:text-white' to='/room'>ROOMS</NavLink>
        <NavLink className='hover:text-white' to='/event'>EVENTS</NavLink>
        <NavLink className='hover:text-white' to='/about'>ABOUT</NavLink>
        <NavLink className='hover:text-white' to='/contact'>CONTACT</NavLink>
    </ul>
   </nav>
  )
}

export default Navbar

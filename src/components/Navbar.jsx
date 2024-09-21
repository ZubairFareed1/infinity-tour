import React from 'react'
import {useNavigate, useLocation, NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';
import logo from '../assets/logo.png'
import './Navbar.css'


export default function Navbar() {
const navigate = useNavigate();
// const location = useLocation();
  return (
    <div className='flex h-6rem border-2'>
      {/* Logo */}
      <div>
         <NavLink to="/">
            <img src={logo} alt="" className='w-5rem'/>
         </NavLink>
      </div>

      {/* Links */}
       <nav>
          <ul className='flex gap-5 list-none'>
            <li><NavLink className='no-underline text-xl font-semibold text-900' to="/">Home</NavLink></li>
            <li><NavLink className='no-underline text-xl font-semibold text-900' to="/destination">Destination</NavLink></li>
            <li><NavLink className='no-underline text-xl font-semibold text-900' to="/packages">Packages</NavLink></li>
            <li><NavLink className='no-underline text-xl font-semibold text-900' to="/offers">Offers</NavLink></li>
            <li><NavLink className='no-underline text-xl font-semibold text-900' to="/blog">Blog</NavLink></li>
            <li><NavLink className='no-underline text-xl font-semibold text-900' to="/aboutus">About Us</NavLink></li>
            <li><NavLink className='no-underline text-xl font-semibold text-900' to="/contactus">Contact Us</NavLink></li>
          </ul>
       </nav>

      {/* Button */}
      <div>
         <Button label="Sign Ip" onClick={()=>navigate('/signin')}/>
      </div>
    
    
    </div>
  )
}

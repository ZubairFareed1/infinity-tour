import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

// icons
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    !showMenu ? document.body.style.overflow = 'hidden': document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className='hidden fixed top-0 left-0 w-full lg:flex align-items-center justify-content-between h-6rem px-4 xl:px-8 navbar-wrapper bg-blue-50 shadow-2'>
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src={logo} alt="Logo" className='w-5rem'/>
          </NavLink>
        </div>

        {/* Links */}
        <nav>
          <ul className='flex gap-2 list-none'>
          <li className=''><NavLink className={`no-underline p-2 inline-block hover:bg-primary-100 border-round-sm text-base font-semibold text-900 ${({isActive})=>{isActive?"active":''}}`}  to="/">Home</NavLink></li>
          <li className=''><NavLink className={`no-underline p-2 inline-block hover:bg-primary-100 border-round-sm text-base font-semibold text-900 ${({isActive})=>{isActive?"active":''}}`}  to="/destination">Destination</NavLink></li>
          <li className=''><NavLink className={`no-underline p-2 inline-block hover:bg-primary-100 border-round-sm text-base font-semibold text-900 ${({isActive})=>{isActive?"active":''}}`}  to="/packages">Packages</NavLink></li>
          <li className=''><NavLink className={`no-underline p-2 inline-block hover:bg-primary-100 border-round-sm text-base font-semibold text-900 ${({isActive})=>{isActive?"active":''}}`}  to="/offers">Offers</NavLink></li>
          <li className=''><NavLink className={`no-underline p-2 inline-block hover:bg-primary-100 border-round-sm text-base font-semibold text-900 ${({isActive})=>{isActive?"active":''}}`}  to="/blog">Blog</NavLink></li>
          <li className=''><NavLink className={`no-underline p-2 inline-block hover:bg-primary-100 border-round-sm text-base font-semibold text-900 ${({isActive})=>{isActive?"active":''}}`}  to="/aboutus">About Us</NavLink></li>
          <li className=''><NavLink className={`no-underline p-2 inline-block hover:bg-primary-100 border-round-sm text-base font-semibold text-900 ${({isActive})=>{isActive?"active":''}}`}  to="/contactus">Contact Us</NavLink></li>
          </ul>
        </nav>

        {/* Button */}
        <div>
          <Button label="Sign in" size='large' onClick={() => navigate('/signin')} />
        </div>
      </div>

      {/* Mobile View */}
      <div className='fixed top-0 left-0 w-full h-6rem flex lg:hidden justify-content-between align-items-center px-4 bg-blue-50 shadow-2'>
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src={logo} alt="Logo" className='w-5rem'/>
          </NavLink>
        </div>

        {/* Menu Icon */}
        <div onClick={toggleMenu}>
          <HiMenu className='text-4xl cursor-pointer' />
        </div>
      </div>

      {/* Side Menu Overlay */}
      
        <div className={`fixed inset-0 bg-black-alpha-40 blur-filter z-5 transition-all transition-duration-300 ${showMenu ? 'block' : 'hidden'}`} onClick={toggleMenu}>
          <div className={`fixed top-0 right-0 w-16rem h-full bg-white p-2 shadow-4 z-50 transform transition-transform transition-duration-300 ${showMenu ? 'translate-x-0' : '-translate-x-100'}`} onClick={(e) => e.stopPropagation()}>
            <div className='flex align-items-center justify-content-end mb-3 py-2'>
             
              {/* Close Icon */}
              <HiX className='text-4xl cursor-pointer ' onClick={toggleMenu} />
            </div>
            
            {/* Side Menu Links */}
            <nav className=''>
            <Divider />

              <ul className=''>
                <li className=''><NavLink className='no-underline text-base font-semibold text-900 block border-round-md  px-2 py-3' to="/" onClick={toggleMenu}>Home</NavLink></li>
                <li className=''><NavLink className='no-underline text-base font-semibold text-900 block border-round-md  px-2 py-3' to="/destination" onClick={toggleMenu}>Destination</NavLink></li>
                <li className=''><NavLink className='no-underline text-base font-semibold text-900 block border-round-md  px-2 py-3' to="/packages" onClick={toggleMenu}>Packages</NavLink></li>
                <li className=''><NavLink className='no-underline text-base font-semibold text-900 block border-round-md  px-2 py-3' to="/offers" onClick={toggleMenu}>Offers</NavLink></li>
                <li className=''><NavLink className='no-underline text-base font-semibold text-900 block border-round-md  px-2 py-3' to="/blog" onClick={toggleMenu}>Blog</NavLink></li>
                <li className=''><NavLink className='no-underline text-base font-semibold text-900 block border-round-md  px-2 py-3' to="/aboutus" onClick={toggleMenu}>About Us</NavLink></li>
                <li className=''><NavLink className='no-underline text-base font-semibold text-900 block border-round-md  px-2 py-3' to="/contactus" onClick={toggleMenu}>Contact Us</NavLink></li>
                <Divider />
                <Button label="Sign in" className='w-full' size='large' onClick={() => navigate('/signin')} />
              </ul>
            </nav>
          </div>
        </div>
   
    </>
  );
}

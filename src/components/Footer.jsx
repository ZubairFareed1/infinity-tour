import React from 'react'
import { NavLink } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import { Divider } from 'primereact/divider'

import { IoSend } from "react-icons/io5";
import '../styles/Footer.css'


export default function Footer() {
  return (
    <div className='responsive  bg-blue-100 py-3'>
        <div className='w-12 h-full flex flex-column md:flex-row gap-3 md:gap-0 mt-4  '>
          <div className='md:w-3 h-full text-center md:text-left'>
            <NavLink className='' to={`/`}>
              <img src="logo2.png" alt="footer-logo"  className='w-10rem'/>
            </NavLink>
            <div className='flex gap-2 justify-content-center md:justify-content-start'>
              <NavLink to='https://www.facebook.com'><img src={facebook} alt="facebook" className='' style={{width:"22px"}}/></NavLink>
              <NavLink to='https://www.instagram.com'><img src={instagram} alt="instagram" className='' style={{width:"22px"}}/></NavLink>
              <NavLink to='https://www.twitter.com'><img src={twitter} alt="twitter" className='' style={{width:"22px"}}/></NavLink>
            </div>
          </div>
          <div className='md:w-2 h-full flex flex-column gap-3 align-items-center md:align-items-start'>
            <NavLink className='no-underline text-900 text-base font-medium' to='/galelry'>Gallery</NavLink>
            <NavLink className='no-underline text-900 text-base font-medium' to='/faqs'>FAQs</NavLink>
            <NavLink className='no-underline text-900 text-base font-medium' to='/testimonials'>Testimonials</NavLink>

          </div>
          <div className='md:w-2 h-full flex flex-column gap-3 align-items-center md:align-items-start'>
            <NavLink className='no-underline text-900 text-base font-medium' to='/galelry'>Travel Guides</NavLink>
            <NavLink className='no-underline text-900 text-base font-medium' to='/faqs'>Customer Portal</NavLink>
            <NavLink className='no-underline text-900 text-base font-medium' to='/testimonials'>Terms and Conditions</NavLink>

          </div>
          <div className='md:w-2 h-full flex flex-column gap-3 md:pl-4 align-items-center md:align-items-start'>
            <NavLink className='no-underline text-900 text-base font-medium' to='/galelry'>About Us</NavLink>
            <NavLink className='no-underline text-900 text-base font-medium' to='/faqs'>Contact Us</NavLink>

          </div>
          <div className='md:w-3 h-full '>
            <h3 className='text-lg font-semibold text-center md:text-left'>Subscribe and Stay Updated</h3>
            <p className='text-color-secondary text-sm mt-1 text-center md:text-left'>Subscribe now for exclusive deals, travel tips, and updates straight to your inbox!"</p>

            <div className=' w-12 h-3rem  bg-white border-round-sm flex mt-2'>
              <input type="text" className='pl-2 w-10 h-full bg-transparent border-none border-round-sm border-noround-right custum-input text-base' placeholder='Email'/>
              <button className='w-2 h-full bg-primary-700 border-none border-round-right-sm'><IoSend className='text-white text-lg' /></button>
            </div>

          </div>

        
        </div>
        <Divider />
        <div>
        <span className='text-color-secondary text-center block'>© 2024 Infinity Travel. All rights reserved.</span>

        </div>
          
    </div>
  )
}

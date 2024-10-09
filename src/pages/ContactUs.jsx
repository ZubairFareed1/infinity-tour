import React from 'react'
import contactus_hero from '../assets/contactushero.jpg'
import { IoCall } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { Button } from 'primereact/button';

import '../styles/ContactUs.css'
import { FaLocationDot } from 'react-icons/fa6';

export default function ContactUs() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='min-h-screen'>
      <div className='h-5rem lg:h-6rem'></div>
      <div className=' border-1 h-10rem md:h-20rem' style={{ backgroundImage: `url(${contactus_hero})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className='responsive w-full h-full bg-black-alpha-60 flex flex-column align-items-center justify-content-center gap-3'>
          <h2 className='text-white text-center text-3xl md:text-5xl'>Contact Us</h2>
          <p className='text-white text-center '>We're Here to Help You Explore the World!</p>
        </div>

      </div>
      <div className='responsive '>
        <h3 className='text-2xl mt-4 text-center md:text-left text-color'>Get In Touch</h3>

        <div className=' flex flex-column md:flex-row w-12 gap-5 mt-2'>
          <div className=' h-full  w-full md:w-7'>
            <div className=''>
              <form className='flex md:flex-row flex-column gap-2 h-full w-12' onSubmit={handleFormSubmit}>
                <div className='flex flex-column h-11rem  justify-content-between w-12 md:w-6'>
                  <div className="">
                    <input type="text" placeholder='Name' className='py-3 w-full h-full pl-2 text-base custom-input' />
                  </div>
                  <div className="">
                    <input type="email" placeholder='Email' className='py-3 w-full h-full pl-2 text-base custom-input' />
                  </div>
                  <div className="">
                    <input type="text" placeholder='Subject' className='py-3 w-full h-full pl-2 text-base custom-input' />
                  </div>
                </div>
                <div className='flex flex-column justify-content-between w-12 md:w-6 h-11rem' >
                  <div className="h-7rem">
                    <textarea placeholder='Message...' className='w-full h-full pl-2 text-base custom-input' />
                  </div>
                  <button className='py-3 px-5 border-none text-sm border-round-sm bg-primary-600 hover:bg-primary-700 cursor-pointer text-white font-semibold'>Sent Message</button>


                </div>
              </form>
            </div>
          </div>
          <div className=' text-color p-2  w-full md:w-5 border-round-md  news_card '>
            <h3 className='text-white text-center'>Subscribe</h3>
            <p className='text-xs text-white text-center'>Subscribe to our newsletter to get the latest updates and special offers.</p>
            <div className='flex flex-column gap-2 mt-2'>
              <input type="email" placeholder='Email' className='py-2 w-full h-full pl-2 text-base custom-input' />
              <button className='py-2 px-5 border-1 border-white text-sm border-round-sm bg-primary-600 hover:bg-primary-700 cursor-pointer text-white font-semibold'>Subscribe</button>
            </div>
          

          </div>

        </div>


        <div className='py-4 mt-5 flex flex-column md:flex-row  gap-4'>

          <div className='w-12 md:w-4 p-3 border-round-sm cursor-pointer border-1 border-200 shadow-1 hover:shadow-3 bg-blue-50' onClick={() => { window.location.href = 'tel:+1212121212' }}>
                <div className='p-1 bg-blue-600 h-4rem w-4rem border-round-md  flex align-items-center justify-content-center'>
                  <IoCall className='text-white text-3xl' />
                </div>
                <h3 className='text-color mt-2'>+1212121212</h3>
                <p className='text-sm text-color-secondary mt-2'>Feel free to reach out to us directly at any time. Call us for inquiries, support, or booking assistance. We’re here to help</p>
          </div>



          <div className='w-12 md:w-4 p-3 border-round-sm cursor-pointer border-1 border-200 shadow-1 hover:shadow-3 bg-blue-50' onClick={() => { window.location.href = 'mailto:infinity_travels@abc.com' }}>
                <div className='p-1 bg-blue-600 h-4rem w-4rem border-round-md  flex align-items-center justify-content-center'>
                  <IoIosMail className='text-white text-3xl' />
                </div>
                <h3 className='text-color mt-2'>support@infinity_travels.com</h3>
                <p className='text-sm text-color-secondary mt-2'>Contact us anytime at support@infinity_travels.com for quick assistance and inquiries!</p>
          </div>



          <div className='w-12 md:w-4 p-3 border-round-sm cursor-pointer border-1 border-200 shadow-1 hover:shadow-3 bg-blue-50' onClick={() => { window.open('https://maps.app.goo.gl/qsTvrJ5Q3hXxRHFJ8',"_blank") }}>
                <div className='p-1 bg-blue-600 h-4rem w-4rem border-round-md  flex align-items-center justify-content-center'>
                  <FaLocationDot className='text-white text-3xl' />
                </div>
                <h3 className='text-color mt-2'>123 Street, London</h3>
                <p className='text-sm text-color-secondary mt-2'>Visit us at 123 Main Street for an unforgettable experience!</p>
          </div>

        </div>

        <div className='my-4 border-1 h-15rem border-round-md overflow-hidden'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d24080.825349981453!2d-0.16194774109061513!3d51.48776973932016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDI5JzEzLjIiTiAwwrAwOScxMy40Ilc!5e0!3m2!1sen!2s!4v1728487011698!5m2!1sen!2s" className='border-none w-full h-full' allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>


    </div>
  )
}

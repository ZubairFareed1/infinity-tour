import React,{useEffect, useState} from 'react';
import axios from 'axios';
import DestinationCard from '../components/DestinationCard';
import { IoSearchOutline } from "react-icons/io5";
import '../styles/Destinations.css';

export default function Destinations() {

  return (
    <div  className=' min-h-screen '>
      <div className='h-5rem lg:h-6rem'></div>
      
      <div className='Destinationhero border-1 h-25rem'>
        <div className=' h-full bg-black-alpha-70'>
          <div className='flex flex-column justify-content-center h-full fluid-responsive'>
              <h1 className='text-white text-center text-5xl'>Explore your Dream Destinations</h1>
              <p className='text-white-alpha-70 text-center mt-2 md:px-8 px-0 '>We have Recommended Papular Destinations every week so you don’t have to worry about your dream destinations with Infinity tour.</p>  
              <div className='flex justify-content-center mt-5'>
              {/* Input field for search destination */}
              <div className='destination-input flex justify-content-center h-4rem border-1 border-100 border-round-md surface-0 shadow-1'>
              <div className=' w-12 mx-2 my-2 flex align-items-center surface-50 border-round-sm'>

                <form action="" className='flex h-full w-full'>
                  <input type="text" placeholder='Search Destination...' className='w-full focus:border-none border-none custum-input pl-2 bg-transparent text-base ' />
                  <button className='py-2 px-4 border-none bg-blue-400 hover:bg-blue-600 border-round-right-sm'>
                    <IoSearchOutline className='text-white text-2xl' />
                  </button>
                </form>

              </div>
              </div>

            </div>
          </div> 

        </div>
       


      </div>
    </div>
  )
}

import React from 'react'
import '../styles/Home.css'
import plane from '../assets/plane.png'
import { IoSearchOutline } from "react-icons/io5";


export default function Home() {
  return (
    <div className='main-home w-full'>
      {/* Hero section */}
      <div className='hero responsive flex flex-column gap-3 lg:gap-0 lg:flex-row'>
        <div className=' lg:w-6 flex flex-column gap-1 lg:gap-2'>
          <div className='flex justify-content-center lg:justify-content-start align-items-center mt-2'>
          <img src={plane} className='w-3rem scalex-1' alt="" />
          <span className='text-blue-600 text-xs'>Journey beyond borders</span>
          </div>

          <h1 className='text-4xl md:text-6xl font-semibold my-1 text-center lg:text-left'><span className='text-blue-600 font-bold'>Discover</span> the <span className='hidden lg:inline'><br /></span> World's Hidden <span className='hidden lg:inline'><br /></span> Gems with Us!</h1>
          <p className='text-color-secondary text-center lg:text-left text-sm md:text-base lg:text-lg  my-1'>Explore the world's most stunning destinations with our tailored tours. Discover hidden gems, iconic landmarks, and unforgettable experiences. Start your adventure today and create memories that last a lifetime!</p>


          <div className='btn-card-desktop hidden lg:flex h-4rem border-1 border-blue-200 border-round-md surface-0 shadow-1'>
            <div className=' w-12 mx-2 my-2 flex align-items-center surface-50 border-round-sm'>

              <form action="" className='flex h-full w-full'>
              <input type="text" placeholder='Search Tour...' className='w-full focus:border-none border-none custum-input pl-2 bg-transparent text-base ' />
              <button className='py-2 px-4 border-none bg-blue-400 hover:bg-blue-600 border-round-right-sm'>
                <IoSearchOutline className='text-white text-2xl te font-semibold' />
              </button>
              </form>

            </div>
            
          </div>
        </div>
        <div className='lg:w-6'>

        <div className='flex justify-content-center'>
          <img src="hero-img.svg" alt="hero-svg" className='w-full sm:w-7 mx- lg:w-full' />
        </div>
        {/* Mobile view input field */}
        <div className='btn-card-desktop flex lg:hidden w-12 h-4rem border-1 border-100 border-round-md surface-0 shadow-1'>
            <div className=' w-12 mx-2 my-2 flex align-items-center surface-50 border-round-sm'>

              <form action="" className='flex h-full w-full'>
              <input type="text" placeholder='Search Tour...' className='w-full focus:border-none border-none custum-input pl-2 bg-transparent text-base ' />
              <button className='py-2 px-4 border-none bg-blue-400 hover:bg-blue-600 border-round-right-sm'>
                <IoSearchOutline className='text-white text-2xl' />
              </button>
              </form>

            </div>
            
          </div>

        </div>
      </div>

      {/* Benifits section */}
      <div className='responsive border-1 my-5 py-3 bg-white'>
        <div className='flex w-full gap-3 flex-column lg:flex-row' >
          <div className='w-12 lg:w-4 border-1'>
            <span className='text-blue-600 text-xs'>What we give</span>
            <h2>Best Features
            For You</h2>
            <p className='text-base'>we will provide the best features for those of you who want to travel comfortably with your family.</p>

          </div>
          <div className='flex flex-column lg:flex-row w-12 lg:w-8 gap-4 '>
              <div className='lg:w-4 w-12  border-1 h-10rem border-200 surface-50'>1</div>
              <div className='lg:w-4 w-12  border-1 h-10rem border-200 surface-50'>2</div>
              <div className='lg:w-4 w-12  border-1 h-10rem border-200 surface-50'>3</div>
          </div>
        </div>


      </div>
         
      
    </div>
  )
}

import React,{useEffect, useState, useRef} from 'react';
import axios from 'axios';
import DestinationCard from '../components/DestinationCard';
import { IoSearchOutline } from "react-icons/io5";
import '../styles/Destinations.css';
import { BiFilter } from 'react-icons/bi';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Paginator } from 'primereact/paginator';
import offer from '../assets/offer.png'
import destinationData from '../data/destination';

export default function Destinations() {
  const overlaypanelRef = useRef(null);
  const [destination, setDestination] = useState(destinationData);
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Set the number of items per page
  
    // Calculate the total number of pages
    const totalItems = destination.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    // Get the current items to display based on the current page
    const currentItems = destination.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    const onPageChange = (event) => {
      setCurrentPage(event.page + 1); // Update the current page
    };

    const handleOverlay = (event) => {
    overlaypanelRef.current.toggle(event);
    console.log(overlaypanelRef.current);
  }

  return (
    <div  className=' min-h-screen '>
      <div className='h-5rem lg:h-6rem'></div>
      
      <div className='Destinationhero h-25rem'>
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
                  <button className='py-2 px-4 border-none bg-blue-400 hover:bg-blue-600 border-round-right-sm' >
                    <IoSearchOutline className='text-white text-2xl' />
                  </button>
                </form>

              </div>
              </div>

            </div>
          </div> 

        </div>
       


      </div>

      {/* body section */}
      <div className='responsive'>
      <div className='border-200 pt-5 mb-4'>
        <div className='flex w-12 gap-4'>
          {/* cards section */}
          <div className='md:w-8'>
            <div className='h-3rem flex align-items-center justify-content-between px-3'>
                <span className='text-color-secondary text-base'>Showing Result {8} of {24}</span>
                <Button label='Filter' severity='secondary' outlined className='gap-2 no-outline' onClick={handleOverlay}><BiFilter className='text-2xl' /></Button>
                {/* filter overlay panel */}
            </div>
                <OverlayPanel ref={overlaypanelRef} className='custom-overlaypanel'>
                    <div className='flex flex-column gap-3'>
                        <span className='text-base'>Filter</span>
                        <div className='flex flex-column gap-2'>
                            <span className='text-base'>Price</span>
                            <input type="range" className='w-full' />
                        </div>
                        
                    </div>
                </OverlayPanel>
                <div className='flex flex-wrap'>
                    {
                      currentItems.map((data) => (
                        <DestinationCard key={data.id} data={data} forscreen='destination'/>
                      ))
                    }
                </div>

                <Paginator
                first={currentPage - 1}
                rows={itemsPerPage}
                totalRecords={totalItems}
                onPageChange={onPageChange}
                className="mt-4 text-center"
                
              />
          
          </div>

          
          {/* sidebar section */}
          <div className=' w-4 hidden md:block'>
            <h3 className='mt-2'>Offers</h3>
            <div className='border-round-sm mt-4 h-10rem bg-blue-500 relative'>
              <img src={offer} alt="" className='w-8rem absolute bottom-0 right-0'/>
              <div className=' p-4'>
                <h3 className='text-4xl font-bold text-red-500'>30% OFF</h3>
                <span className='text-white font-bold'>01-01-2025</span>

              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
    </div>
  )
}

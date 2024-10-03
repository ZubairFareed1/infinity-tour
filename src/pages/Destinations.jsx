import React,{useEffect, useState, useRef} from 'react';
import axios from 'axios';
import DestinationCard from '../components/DestinationCard';
import { IoSearchOutline } from "react-icons/io5";
import '../styles/Destinations.css';
import { BiFilter } from 'react-icons/bi';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Paginator } from 'primereact/paginator';

export default function Destinations() {
  const overlaypanelRef = useRef(null);
  const [destination, setDestination] = useState([
    {
      id: 1,
      name: 'France',
      image: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1048826978v2-2313x1406.jpg',
      reviews: 1700,
      rating: 4.5
    },
    {
      id: 2,
      name: 'USA',
      image: 'https://thumbs.dreamstime.com/b/atlanta-georgia-usa-downtown-skyline-atlanta-georgia-usa-110765393.jpg',
      reviews: 9500,
      rating: 5.0
    },
    {
      id: 3,
      name: 'Indonesia',
      image: 'https://www.eyeonasia.gov.sg/images/asean-countries/Indonesia%20snapshot%20cover%20iso.jpg',
      reviews: 8700,
      rating: 5.0
    },
    {
      id: 4,
      name: 'Italy',
      image: 'https://www.travelanddestinations.com/wp-content/uploads/2019/05/Beautiful-places-in-Italy-Burano.jpg',
      reviews: 6200,
      rating: 4.8
    },
    {
      id: 5,
      name: 'Spain',
      image: 'https://imgproxy.natucate.com/HmhJoiR_WkciuQQilTkPCsa2I1qjjNxzpO0_rVNLX8E/rs:fill/g:ce/w:3840/h:2160/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlemllbGUvNDI4YTYzZWUtMmYzOS00YmFjLTgwY2UtNmY2N2Y4Yzc1NzJlL2MxNDJhZjc3MWUtMTY3OTQ4Njc1MC9zcGFuaWVuLWxhZW5kZXJpbmZvcm1hdGlvbmVuLXN0YWR0LW96ZWFuLXdhc3Nlci1uYXR1Y2F0ZS5qcGc',
      reviews: 5000,
      rating: 4.7
    },
    {
      id: 6,
      name: 'Australia',
      image: 'https://www.shutterstock.com/image-photo/sydney-australia-october-20-2023-600nw-2465212583.jpg',
      reviews: 4300,
      rating: 4.6
    },
    {
      id: 7,
      name: 'Japan',
      image: 'https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg',
      reviews: 5400,
      rating: 4.9
    },
    {
      id: 8,
      name: 'Canada',
      image: 'https://ilacinternationalcollege.com/wp-content/uploads/2024/06/Featured-image-1024x683.jpg',
      reviews: 3200,
      rating: 4.5
    },
    {
      id: 9,
      name: 'Brazil',
      image: 'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/29/gettyimages-161356247.jpg?crop=0.888888888888889xw:1xh;center,top&resize=768:*',
      reviews: 3100,
      rating: 4.4
    },
    {
      id: 10,
      name: 'Thailand',
      image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
      reviews: 4500,
      rating: 4.6
    },
    {
      id: 11,
      name: 'Mexico',
      image: 'https://i.natgeofe.com/n/73d9e4e3-4884-4e93-ac41-6be6a90079f5/mexico-city-travel%20(1).jpg?w=2880&h=1920',
      reviews: 2800,
      rating: 4.3
    },
    {
      id: 12,
      name: 'Germany',
      image: 'https://media.istockphoto.com/id/658000044/photo/aerial-view-of-cologne-at-spring.jpg?s=612x612&w=0&k=20&c=3RAU-3oUEuBRfa4_1dqgEWxIwwWfkLNctzUTYKL479g=',
      reviews: 4100,
      rating: 4.7
    },
    {
      id: 13,
      name: 'India',
      image: 'https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg?w=1200',
      reviews: 3700,
      rating: 4.5
    },
    {
      id: 14,
      name: 'South Africa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33MtBwAtNpVWWrC5tFDe505dQMPnoq0deng&s',
      reviews: 2500,
      rating: 4.8
    },
    {
      id: 15,
      name: 'Russia',
      image: 'https://i.natgeofe.com/k/415419c5-3768-4c8f-8697-f90de7a6075b/russia-st-basils_16x9.jpg?w=1200',
      reviews: 1900,
      rating: 4.4
    },
    {
      id: 16,
      name: 'New Zealand',
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/191206180458-u114-auckland-city-new-zealand-chris-mclennan.jpg?q=w_1110,c_fill',
      reviews: 2300,
      rating: 4.6
    },
    {
      id: 17,
      name: 'Egypt',
      image: 'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_1037036482v2.jpg',
      reviews: 1600,
      rating: 4.5
    },
    {
      id: 18,
      name: 'Turkey',
      image: 'https://media.istockphoto.com/id/160193420/photo/blue-mosque-in-istanbul.jpg?s=612x612&w=0&k=20&c=GABmGJwvlo-ejMwPZKCU4YCUyiVxXNHc5dDneL7o0Mg=',
      reviews: 4200,
      rating: 4.8
    },
    {
      id: 19,
      name: 'Singapore',
      image: 'https://www.planetware.com/wpimages/2020/03/singapore-in-pictures-beautiful-places-to-photograph-marina-bay-sands.jpg',
      reviews: 3000,
      rating: 4.7
    },
    {
      id: 20,
      name: 'UAE',
      image: 'https://www.planetware.com/wpimages/2019/12/united-arab-emirates-in-pictures-beautiful-places-to-photograph-the-palm-jumeirah.jpg',
      reviews: 3800,
      rating: 4.9
    }
  ]);
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
      <div className='border-2 border-200 pt-5 mb-4'>
        <div className='flex w-12 gap-4'>
          {/* cards section */}
          <div className='border-1 md:w-8'>
            <div className='h-3rem flex align-items-center justify-content-between'>
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
          <div className='border-1 h-20rem w-4 hidden md:block'>
            <h3>Offers</h3>
            <div className='border-round-sm mt-5 h-10rem bg-blue-500'></div>
          </div>

        </div>

      </div>

    </div>
    </div>
  )
}

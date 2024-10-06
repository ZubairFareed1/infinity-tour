import React,{useState, useRef} from 'react'
import { IoSearchOutline } from "react-icons/io5";
import DestinationCard from '../components/DestinationCard';
import '../styles/packages.css'
import { BiFilter } from 'react-icons/bi';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Paginator } from 'primereact/paginator';
import offer from '../assets/offer.png'
import PackageCard from '../components/PackageCard';
import packageData from '../data/packages';

export default function Packages() {
  const overlaypanelRef = useRef(null);

  const [packages, setPackages] = useState(packageData);
 
     const handleOverlay = (event) => {
     overlaypanelRef.current.toggle(event);
     console.log(overlaypanelRef.current);
   }
  return (
    <div  className=' min-h-screen '>
    <div className='h-5rem lg:h-6rem'></div>
    
    <div className='packageshero border-1 h-25rem'>
      <div className=' h-full bg-black-alpha-70'>
        <div className='flex flex-column justify-content-center h-full fluid-responsive'>
            <h1 className='text-white text-center text-5xl'>Explore Our Exclusive Travel Packages</h1>
            <p className='text-white-alpha-70 text-center mt-2 md:px-8 px-0 '>Discover vibrant cities and breathtaking landscapes with our exclusive travel packages</p>  
            <div className='flex justify-content-center mt-5'>
            {/* Input field for search destination */}
            <div className='packages-input flex justify-content-center h-4rem border-1 border-100 border-round-md surface-0 shadow-1'>
            <div className=' w-12 mx-2 my-2 flex align-items-center surface-50 border-round-sm'>

              <form action="" className='flex h-full w-full'>
                <input type="text" placeholder='Search Packages...' className='w-full focus:border-none border-none custum-input pl-2 bg-transparent text-base ' />
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

    {/* body section */}
    <div className='responsive'>
      <div className='border-200 pt-5 mb-4'>
        <div className='flex w-12 gap-4'>
          {/* cards section */}
          <div className='w-12 md:w-8'>
            <div className='h-3rem flex align-items-center justify-content-between '>
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
                <div className='flex flex-column gap-4'>
                    {
                      packages.map((data) => (
                       <PackageCard key={data.id} data={data}/>
                      ))
                    }
                </div>

                <div className='mt-4'>
                  <button className='w-full py-2 bg-transparent border-1 text-primary text-base font-semibold cursor-pointer hover:bg-primary hover:text-white border-primary border-round-sm '>Load more</button>
                </div>

                
          
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

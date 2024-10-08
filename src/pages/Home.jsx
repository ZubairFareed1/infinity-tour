import React, { useState } from 'react'
import '../styles/Home.css'
import plane from '../assets/plane.png'
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidDirections } from "react-icons/bi";
import { GiChoice } from "react-icons/gi";
import { IoBookmark } from "react-icons/io5";
import DestinationCard from '../components/DestinationCard';
import usaImg from '../assets/USA.jpg';
import indonesiaImg from '../assets/Indonesia.jpg';
import franceImg from '../assets/france.jpg';
import germanyImg from '../assets/germany 1.jpg';
import { useNavigate } from 'react-router-dom';


import avatar1 from '../assets/avatar1.jpg'
import avatar2 from '../assets/instructor2.jpg'
import avatar3 from '../assets/avator4.webp'
import TestimonalCard from '../components/TestimonalCard';

export default function Home() {
  const navigate = useNavigate();
  const [searchDestination, setSearchDestination] = useState('');

  const handleSearchDestination = (e) =>{
    e.preventDefault();

    if(searchDestination.trim() !== ''){
      navigate(`/destination?search=${encodeURIComponent(searchDestination)}`)
    }

  }
  const [destination, setDestination] = useState([
    {
      id: 1,
      name: 'France',
      image: franceImg,
      reviews: 1700,
      rating: 4.5
    },
    {
      id: 2,
      name: 'USA',
      image: usaImg,
      reviews: 9500,
      rating: 5.0
    },
    {
      id: 3,
      name: 'Indonesia',
      image: indonesiaImg,
      reviews: 8700,
      rating: 5.0
    }
  ])

  const [testimonals, setTestimonals] = useState([
    {
      id: 1,
      name: 'Ethan Parker',
      avatar: avatar1,
      testimonal: `An unforgettable experience! The tour was well-organized, and the guides were knowledgeable. Can't wait for my next trip!`,
      rating: 5
    },
    {
      id: 2,
      name: 'Liam Bennett',
      avatar: avatar2,
      testimonal: `Beautiful destinations and seamless planning. Every detail was taken care of, making it a stress-free and enjoyable adventure.`,
      rating: 4.5
    },
    {
      id: 3,
      name: 'Sophia Mitchell',
      avatar: avatar3,
      testimonal: `Highly recommend this tour service! The itinerary was perfect, and we got to explore hidden gems at every stop.`,
      rating: 5
    }
  ])
  const [searchTour, SetSearchTour] = useState('');
  const handleSearchTour = (e) => {
    e.preventDefault();
    if (searchTour.trim() !== '') {
      navigate(`/packages?search=${encodeURIComponent(searchTour)}`)
    }

  }
  return (
    <div className='main-home w-full'>
      {/* Hero section */}
      <div className='hero responsive flex flex-column gap-3 lg:gap-0 lg:flex-row'>
        <div className=' lg:w-6 flex flex-column gap-1 lg:gap-2'>
          <div className='flex justify-content-center lg:justify-content-start align-items-center mt-2'>
            <img src={plane} className='w-3rem scalex-1' alt="" />
            <span className='text-blue-600 text-sm font-semibold'>Journey beyond borders</span>
          </div>

          <h1 className='text-4xl md:text-6xl font-semibold my-1 text-center lg:text-left'><span className='text-blue-600 font-bold'>Discover</span> the <span className='hidden lg:inline'><br /></span> World's Hidden <span className='hidden lg:inline'><br /></span> Gems with Us!</h1>
          <p className='text-color-secondary text-center lg:text-left text-sm md:text-base lg:text-lg  my-1'>Explore the world's most stunning destinations with our tailored tours. Discover hidden gems, iconic landmarks, and unforgettable experiences. Start your adventure today and create memories that last a lifetime!</p>


          <div className='btn-card-desktop hidden lg:flex h-4rem border-1 border-blue-200 border-round-md surface-0 shadow-1'>
            <div className=' w-12 mx-2 my-2 flex align-items-center surface-50 border-round-sm'>

              <form onSubmit={handleSearchTour} className='flex h-full w-full'>
                <input type="text" placeholder='Search Tour...' className='w-full focus:border-none border-none custum-input pl-2 bg-transparent text-base ' onChange={(e) => { SetSearchTour(e.target.value) }} value={searchTour} />
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
      <div className='responsive mt-5 py-5 bg-white'>
        <div className='flex w-full gap-3 flex-column lg:flex-row' >
          <div className='w-12 lg:w-4 '>
            <span className='text-blue-600 text-sm font-semibold block text-center md:text-left'>What we give</span>
            <h2 className='my-1 text-2xl md:text-4xl text-700 text-center md:text-left'><span className='font-bold'>Best Features </span>
              <span><br /></span>For You</h2>
            <p className='text-base text-color-secondary text-center md:text-left'>we will provide the best features for those of you who want to travel comfortably with your family.</p>

          </div>
          <div className='flex flex-column lg:flex-row w-12 lg:w-8 gap-4 '>
            <div className='lg:w-4 w-12  border-1 border-100 p-3 border-round-md hover:shadow-3 cursor-pointer'>
              <div className='w-3rem h-3rem bg-blue-100 border-round-md flex justify-content-center align-items-center '><GiChoice className='text-xl text-blue-600' /></div>
              <h4 className='mt-2 text-base mb-0'>Lots of Choices</h4>
              <p className='text-xs text-color-secondary mt-0 '>we have provided several choices of destinations and very cheap traveling packages.</p>
            </div>

            <div className='lg:w-4 w-12  border-1 border-100 p-3 border-round-md hover:shadow-3 cursor-pointer'>
              <div className='w-3rem h-3rem bg-blue-100 border-round-md  flex justify-content-center align-items-center'><BiSolidDirections className='text-xl text-blue-600' /></div>
              <h4 className='mt-2 text-base mb-0'>Best Tour Guide</h4>
              <p className='text-xs text-color-secondary mt-0 '>we will provide the professional tour guide and provide the people who understand the place.</p>
            </div>

            <div className='lg:w-4 w-12  border-1 border-100 p-3 border-round-md hover:shadow-3 cursor-pointer'>
              <div className='w-3rem h-3rem bg-blue-100 border-round-md  flex justify-content-center align-items-center'><IoBookmark className='text-xl text-blue-600' /></div>
              <h4 className='mt-2 text-base mb-0'>Easy Booking</h4>
              <p className='text-xs text-color-secondary mt-0 '>we will also make it easier for users to book the tickets or places you want to go.</p>
            </div>
          </div>
        </div>


      </div>

      {/* About section */}
      <div className='responsive '>
        <div className='w-12 flex flex-column-reverse lg:flex-row my-2 md:my-4 lg:my-6'>

          <div className='w-12 lg:w-6 h-full flex justify-content-center'>
            <img src="about-section-img.svg" alt="about-img" className='h-full w-12 sm:w-8 lg:w-12' />
          </div>

          <div className='w-12 lg:w-6 h-full'>
            <div className='w-12 mt-2'>

              <span className='text-blue-600 text-sm font-semibold block text-center lg:text-left'>About</span>
              <h2 className='font-medium mt-2 mb-1 text-700 text-2xl md:text-4xl text-center lg:text-left'><span className='font-bold inline md:block'>We Recommend</span> Beautiful Destinations Every Month</h2>
              <p className='text-base text-color-secondary text-center lg:text-left'>Explore your dream destinations with us! We offer top travel spots and highlight the best deals every month, ensuring unforgettable experiences at every destination.</p>
              <div className='flex flex-column md:flex-row gap-2 md:gap-4 w-12 mt-6 '>
                <div className='border-100 border-1 border-round-md surface-card w-12 md:w-4 p-2 shadow-2'>
                  <h4 className='my-0 text-center'>15000+</h4>
                  <p className='text-center text-color-secondary my-0'>Our Explorers</p>
                </div>
                <div className='border-100 border-1 border-round-md surface-card w-12 md:w-4 p-2 shadow-2'>
                  <h4 className='my-0 text-center'>100+</h4>
                  <p className='text-center text-color-secondary my-0'>Destinations</p>
                </div>
                <div className='border-100 border-1 border-round-md surface-card w-12 md:w-4 p-2 shadow-2'>
                  <h4 className='my-0 text-center'>10+</h4>
                  <p className='text-center text-color-secondary my-0'>Year Experience</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>


      {/* Destinations section */}
      <div className='fluid-responsive mb-5'>
        <div className='w-12 border-1 border-200 bg-gray-50 pt-4 px-2 flex flex-column destination-section'>
          <span className='text-blue-600 text-sm font-semibold block text-center'>Top Destinations</span>
          <h2 className='font-medium mt-2 mb-1 text-700 text-2xl md:text-4xl text-center' ><span className='font-bold'>Let’s Explore</span> your Dream <span className='hidden md:inline'><br /></span> Country Destinations Here!</h2>
          <p className='text-base text-color-secondary text-center md:px-8 lg:px-16'>We have Recommended Papular Destinations every week so you don’t have to worry about your dream destinations with Infinity tour.</p>
          {/* Input for destination */}
          <div className='flex justify-content-center'>

            <div className='btn-card-destination flex h-4rem border-1 border-100 border-round-md surface-0 shadow-1'>
              <div className=' w-12 mx-2 my-2 flex align-items-center surface-50 border-round-sm'>

                <form onSubmit={handleSearchDestination} className='flex h-full w-full'>
                  <input type="text" placeholder='Search Destination...' className='w-full focus:border-none border-none custum-input pl-2 bg-transparent text-base ' onChange={(e)=>{setSearchDestination(e.target.value)}} />
                  <button className='py-2 px-4 border-none bg-blue-400 hover:bg-blue-600 border-round-right-sm'>
                    <IoSearchOutline className='text-white text-2xl' />
                  </button>
                </form>

              </div>

            </div>
          </div>

        </div>

        <div className="w-12 mt-7 flex flex-wrap ">
          {
            destination.map((item) => (
              <DestinationCard data={item} key={item.id} forscreen='home'/>
            ))
          }
        </div>
        <div className='flex justify-content-center mt-3 md:mt-4  '>
          <button className='py-2 px-5 border-none bg-blue-500 hover:bg-blue-600 border-round-sm text-lg text-white cursor-pointer' onClick={() => { navigate("/destination") }}>View All</button>
        </div>


      </div>


      {/* Offer section */}
      <div className='fluid-responsive'>
        <div className='h-15rem mt-3 mb-6 sm:border-round-xl shadow-1 offer-section bg-primary-100 p-4'>
          <h2 className='text-center text-2xl md:text-4xl font-medium text-700 ' ><span className='font-bold'>Let’s Don’t Miss The <span className='text-red-400'>20% Discount</span> &</span><span className='hidden md:inline'><br /></span> Explore the Beauty of the World</h2>
          <p className='text-center text-600 mt-2'>We have many special offers for you.</p>
          <div className='flex justify-content-center mt-3  '>
            <button className='py-2 px-5 border-none bg-blue-500 hover:bg-blue-600 border-round-sm text-lg text-white cursor-pointer' onClick={() => { navigate("/offers") }}>Get Started</button>
          </div>

        </div>

      </div>



      {/* Gallery section */}
      <div className='responsive my-6'>
        <h2 className='text-700 text-2xl md:text-4xl text-center'>Gallery</h2>
        <p className='text-base text-color-secondary text-center mt-2'>Browse our gallery to see stunning views from top travel destinations. <span className='md:inline hidden'><br /></span>Let the photos inspire your next journey!</p>

        <div className='gallery-div h-30rem lg:h-25rem mt-3'>
          <div className="div1 border-round-sm"> </div>
          <div className="div2 border-round-sm"></div>
          <div className="div3 border-round-sm"> </div>
          <div className="div4 border-round-sm"> </div>
          <div className="div5 border-round-sm"> </div>
          <div className="div6 border-round-sm"> </div>
        </div>
        <div className='flex justify-content-center mt-4'>
          <button className='py-2 px-5 border-1 text-base border-round-xs bg-white hover:bg-primary cursor-pointer border-primary text-primary' onClick={() => { navigate('/gallery') }}>Show All</button>
        </div>

      </div>



      {/* Testimonals Section */}
      <div className='responsive bg-primary-100 py-4'>
        <div className='flex flex-column lg:flex-row gap-4 lg:gap-0'>
          <div className='w-12 lg:w-6 flex flex-column gap-4'>
            <h2 className='text-700 text-2xl md:text-4xl text-center lg:text-left'>What Our Travelers<span className='hidden md:inline'><br /></span> Are Saying</h2>
            <p className='text-color-secondary mt-2 text-center lg:text-left'>Read what our happy travelers have to say! From stunning destinations to seamless planning, their reviews reflect the memorable experiences we deliver. Let their stories inspire your next incredible journey with us!</p>
          </div>
          
          <div className='w-12 lg:w-6 p-2 flex flex-column gap-2'>
            {
              testimonals.map((testimonal,index) => (
                <TestimonalCard data={testimonal} key={index} />
              ))
            }

          </div>

        </div>

      </div>

      {/* Get in Touch Section */}
      <div className='responsive my-6'>
        <h2 className='text-700 text-2xl md:text-4xl text-center'>Get in Touch with Us</h2>
        <p className='text-base text-color-secondary text-center mt-2'>Have questions or need more information? We're here to help! Contact us for personalized assistance with your travel plans, and let us guide you toward your next unforgettable adventure.</p>
        <div className='flex justify-content-center mt-4'>
          <form className='flex md:flex-row flex-column gap-2 h-full' onSubmit={(e)=>{e.preventDefault()}}>
              <div className='flex flex-column h-11rem w-18rem justify-content-between'>
                    <div className="">
                    <input type="text" placeholder='Name' className='py-3 w-full h-full pl-2 text-base custom-input'/> 
                    </div>
                    <div className="">
                    <input type="email" placeholder='Email' className='py-3 w-full h-full pl-2 text-base custom-input'/> 
                    </div>
                    <div className="">
                    <input type="text" placeholder='Subject' className='py-3 w-full h-full pl-2 text-base custom-input'/> 
                    </div>
              </div>
              <div className='flex flex-column justify-content-between h-11rem w-18rem' >
                    <div className="h-7rem">
                    <textarea  placeholder='Message...' className='w-full h-full pl-2 text-base custom-input'/> 
                    </div>
                    <button className='py-3 px-5 border-none text-sm border-round-sm bg-primary-600 hover:bg-primary-700 cursor-pointer text-white font-semibold'>Sent Message</button>


              </div>
          </form>
        </div>

      </div>

    </div>
  )
}

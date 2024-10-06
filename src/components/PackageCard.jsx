import React from 'react'
import { GiMeal } from 'react-icons/gi';
import { FaPlaneDeparture } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { RiGuideLine } from 'react-icons/ri';
import { getStars } from '../utils/getStars';
import { useNavigate } from 'react-router-dom';
import { Divider } from 'primereact/divider';


const Meal = <div className='p-2 md:p-1 border-round-sm bg-blue-100 flex justify-content-center align-items-center gap-1'> <GiMeal className='text-sm text-blue-600' /><span className='text-xs text-blue-700'>Meal</span></div>

const Time = (days) => <div className='p-2 md:p-1 border-round-sm bg-blue-100 flex justify-content-center align-items-center gap-1'> <FaClock className='text-sm text-blue-600' /><span className='text-xs text-blue-700'>{days}Days</span></div>

const Guide = () => <div className='p-2 md:p-1 border-round-sm bg-blue-100 flex justify-content-center align-items-center gap-1'> <RiGuideLine className='text-sm text-blue-600' /><span className='text-xs text-blue-700'>Guide</span></div>

function formatReviews(value) {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return value.toString();
}

export default function PackageCard({ data }) {
  const navigator = useNavigate();
  const { title, description, price, duration, image, includes, rating, reviews, id } = data;
  return (
    <div className='border-1 border-200 w-12 md:h-12rem flex flex-column md:flex-row border-round-sm'>
      <div className=' md:w-4'>
        <img src={image} alt="" className='h-full w-full ' style={{ objectFit: 'cover' }} />
      </div>
      <div className='md:w-8 flex flex-column md:flex-row p-2 '>
        <div className='md:w-8 flex flex-column justify-content-between'>
          <div>
            <h3 className='text-700 text-xl'>{title}</h3>
            <p className='text-color-secondary text-sm line-clamp mt-2' style={{}}>{description}</p>
          </div>
          <div className='flex gap-2 mt-3 md:mt-0'>

            {includes.days && Time(includes.days)}
            {includes.meal && Meal}
            {includes.guide && Guide()}


          </div>
        </div>
        <Divider layout="vertical" className="mx-2 hidden md:block" />
        <Divider layout="horizontal" className="block md:hidden" />
        <div className='md:w-4'>
          <div className='flex justify-content-center mt-2'>
            {
              [getStars(rating)].map((star, index) => (
                <span key={index} className='text-md'>{star}</span>
              ))
            }
          </div>
          <div className='flex justify-content-center mt-2'>
            <span className='text-xs'>{rating.toFixed(1)} / ({formatReviews(reviews)} reviews)</span>
          </div>
          <div className='flex justify-content-center mt-4'>
            {
              price && <span className='text-3xl font-bold text-blue-500'>{price}</span>
            }
          </div>
          <div className='flex justify-content-center mt-2'>
            <button className='bg-blue-500 text-white p-3 border-round-3xl border-none shadow-4 hover:bg-blue-600 cursor-pointer text-base ' onClick={() => { navigator(`/packages/package_detail/${id}`) }}>
              View Tour
            </button>
          </div>


        </div>
      </div>

    </div>
  )
}

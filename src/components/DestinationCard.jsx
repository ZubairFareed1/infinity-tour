import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import React from 'react';
import { IoStar } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


export default function DestinationCard({ data }) {
    const navigate = useNavigate();
    function formatReviews(value) {
        if (value >= 1000000) {
          return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        } else if (value >= 1000) {
          return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return value.toString();
      }
    const { name, rating, reviews, image} = data; // Destructure data

    return (
        <div className="w-12 md:w-6 lg:w-4 inline-block">
        <div className='mx-4 my-3 md:m-2 surface-card border-1 border-200 shadow-2 border-round-sm overflow-hidden'>
                <div className='bg-no-repeat bg-cover bg-center h-13rem md:h-10rem ' style={{backgroundImage:`url(${image})`}}>
                </div>
                <div className='p-3 flex flex-column gap-4'>
                    <div className='flex justify-content-between align-items-center'>
                        <h3 className='text-600'>{name}</h3>
                        <div className='flex align-items-center gap-1'><IoStar style={{color:'#FF9529'}} className='text-sm ' /> <span className='text-sm text-color-secondary'>{rating} / ({formatReviews(reviews)})</span> </div>
                    </div>
                    <button className='py-2 bg-transparent border-1 border-primary text-primary hover:bg-primary-50 cursor-pointer' onClick={()=>{navigate('/destination')}}>Detail</button>
                </div>
        </div>
      </div>
    );
}
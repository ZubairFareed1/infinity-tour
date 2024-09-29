import React from 'react'
import { Avatar } from 'primereact/avatar';


export default function TestimonalCard({data}) {
  const {avatar, name, testimonal} = data;
  return (
    <div className='flex gap-2 p-3 rounded-3xl border-400 bg-white border-round-md shadow-3'>
       {/* avatar */}
        <div  className='flex align-items-center'>
          <Avatar image={avatar} shape='circle' size='large'/>
        </div>
        {/* content */}
        <div className=''>
          <h3 className='text-600 text-base'>{name}</h3>
          <p className='text-color-secondary text-xs'>{testimonal}</p>
        </div>
              
    </div>
  )
}

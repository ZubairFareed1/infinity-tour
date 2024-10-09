import { Tag } from 'primereact/tag'
import {Chip} from 'primereact/chip'
import React from 'react'


export default function Itinerray(item) {
  return (
    <div className='border-1 mb-4 p-4 border-round-sm border-200' key={item.id}>
        <h3 className='text-lg mb-2'>{item.title}</h3>
        <p className='text-sm text-color-secondary mb-2'>{item.description}</p>
        <div>
            {
                item.activities.map((activity, index) => (
                    <Tag className='mr-2 bg-transparent border-1 border-300 text-900' rounded value={activity} key={index} />
                    
                ))
            }
        </div>
      
    </div>
  )
}

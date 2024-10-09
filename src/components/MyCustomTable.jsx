import React from 'react'
import { Tag } from 'primereact/tag'

export default function MyCustomTable({ customData }) {
  const { departureLocation, returnLocation, departureTime, returnTime, includes, wear } = customData;
  return (
    <div className='mt-6'>
      {/* Return location */}
      <div className='flex'>
        <div className=' border-bottom-1 w-4 py-3 px-2 flex align-items-center pl-1'>
          <h4 className=''>Departure Location</h4>
        </div>
        <div className=' border-bottom-1 w-8  flex align-items-center pl-1'>
          <p className='text-color-secondary'>{departureLocation}</p>

        </div>
      </div>
      {/* Departure location */}
      <div className='flex'>
        <div className=' border-bottom-1 w-4 py-3 px-2 flex align-items-center pl-1'>
          <h4 className=''>Return Location</h4>
        </div>
        <div className=' border-bottom-1 w-8 py-3 px-2 flex align-items-center pl-1'>
          <p className='text-color-secondary'>{returnLocation}</p>

        </div>
      </div>
      {/* Return Time */}
      <div className='flex'>
        <div className=' border-bottom-1 w-4 py-3 px-2 flex align-items-center pl-1'>
          <h4 className=''>Return Time</h4>
        </div>
        <div className=' border-bottom-1 w-8 py-3 px-2 flex align-items-center pl-1'>
          <p className='text-color-secondary'>Approximately {returnTime}</p>

        </div>
      </div>
      {/* Departure Time */}
      <div className='flex'>
        <div className=' border-bottom-1 w-4 py-3 px-2 flex align-items-center pl-1'>
          <h4 className=''>Departure Time</h4>
        </div>
        <div className=' border-bottom-1 w-8 py-3 px-2 flex align-items-center pl-1'>
          <p className='text-color-secondary'>Please arrive 15 minutes before the scheduled departure time, {departureTime}</p>

        </div>
      </div>
      {/* Wear */}
      <div className='flex'>
        <div className=' border-bottom-1 w-4 py-3 px-2 flex align-items-center pl-1'>
          <h4 className=''>Wear</h4>
        </div>
        <div className=' border-bottom-1 w-8 py-3 px-2 flex align-items-center pl-1'>
          <p className='text-color-secondary'>{wear}</p>

        </div>
      </div>

      {/* Includes */}
      <div className='flex'>
        <div className=' border-bottom-1 w-4 py-3 px-2 flex align-items-center pl-1'>
          <h4 className=''>Includes</h4>
        </div>
        <div className='border-bottom-1 w-8 flex py-3 px-2 align-items-center flex-wrap pl-1'>
          {
            Object.entries(includes[0]).map(([key, value], index) => (
              key === 'days' || value === true ? (
                <Tag key={index} value={key === 'days' ? `${value} Days` : key} className='mr-2 mb-2 p-tag-success' />
              ) : null
            ))
          }
        </div>
      </div>

      {/* Not Includes */}
      <div className='flex'>
        <div className=' border-bottom-1 w-4 py-3 px-2 flex align-items-center pl-1'>
          <h4 className=''>Not Includes</h4>
        </div>
        <div className='border-bottom-1 w-8 py-3 px-2 flex align-items-center pl-1'>
          {
            Object.entries(includes[0]).map(([key, value], index) => (
              key === 'days' || value === true ? null : (
                <Tag key={index} value={key === 'days' ? `${value} Days` : key} className='mr-2 mb-2 p-tag-danger' />
              )
            ))
          }
        </div>
      </div>

    </div>
  )
}

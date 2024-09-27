import React,{useEffect, useState} from 'react';
import axios from 'axios';
import DestinationCard from '../components/DestinationCard';

export default function Destinations() {
  // const [destinations, setDestinations] = useState([])
  // const fetchDestinations = async () => {
  //   const response = await axios.get('http://localhost:3000/api/destination');
  //   setDestinations(response.data)
  // }

  // useEffect(() => {
  //   fetchDestinations()
    
  // },[])
  return (
    <div  className='fluid-responsive pt-8 lg:pt-10'>
      
      <div className='mt-8'>

        {/* {
          destinations.map((item) => (
            <DestinationCard data={item} key={item.id} />
          ))
        }
       */}
      </div>
    </div>
  )
}

import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import packages from '../data/packages';
import PackageTabView from '../components/PackageTabView';
import '../styles/DestinationDetail.css'
import TestimonalCard from '../components/TestimonalCard';
import testimonials from '../data/TestimonialData.js';
import { Button } from 'primereact/button';


export default function PackageDetail() {
    const {id} = useParams()
    // console.log(id)
    const [packageData, setPackageData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const handlePackage = ()=>{
        const data = packages.find((item) => item.id == id); // Use find to get the exact object
        setPackageData(data)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
        // setLoading(false)
    }
    useEffect(()=>{
        handlePackage()
        // console.log(packageData.image)
    },[id])
  
  return (
    <div className='min-h-screen'>
        <div className='h-5rem lg:h-6rem'></div>
        <div className='border-2 p-10 h-20rem' style={{backgroundImage: `url(${packageData?.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
            <div className='w-full h-full bg-black-alpha-70 '>
                <h1 className='text-6xl font-bold text-white text-center pt-4'>{packageData?.title}</h1>
            </div>   
            

        </div>
        <div className='responsive'>
            <div className='flex flex-column-reverse md:flex-row w-12 gap-4 tab'>
                    <div className=' w-12 md:w-9 flex flex-column gap-4' >
                        <div>
                            <PackageTabView packageData={packageData} />
                        </div>
                        <div className=' border-1 border-200 border-round-sm bg-white p-4'>
                            <h2 className='text-xl md:text-2xl text-700'>Tour Reviews</h2>
                            <div className='flex flex-column gap-4 mt-4'>
                                {
                                    testimonials.map((testimonial,index) => (
                                        <TestimonalCard data={testimonial} key={index} />
                                    ))
                                }

                                <Button label="View More" className='w-full' />
                                
                            </div>

                        </div>

                    </div>
                    <div className='w-12 md:w-3 mt-5 flex flex-column gap-8'>
                        <div className='h-5rem flex flex-column border-round-sm overflow-hidden'>
                            <div className='bg-white flex-grow-1 flex align-items-center justify-content-center'>
                                <h2 className='text-blue-500 text-3xl font-bold'>{packageData?.price}</h2>
                            </div>
                            <div className='bg-blue-500 flex-grow-1 flex justify-content-center align-items-center'>
                                <span className='text-white font-semibold'>Per Person</span>
                            </div>

                        </div>
                        
                        <div className='w-full h-10rem bg-blue-100 border-1 hidden md:block'>

                        </div>

                    </div>
            </div>
        </div>
        

      
    </div>
  )
}

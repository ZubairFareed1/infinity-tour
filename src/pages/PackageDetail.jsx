import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import packages from '../data/packages';
import PackageTabView from '../components/PackageTabView';
import '../styles/DestinationDetail.css'

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
                    <div className=' w-12 md:w-9' >
                        <PackageTabView packageData={packageData} />

                    </div>
                    <div className='w-12 md:w-3 mt-5             '>
                        <div className='h-5rem flex flex-column border-round-sm overflow-hidden'>
                            <div className='bg-white flex-grow-1 flex align-items-center justify-content-center'>
                                <h2 className='text-blue-500 text-3xl font-bold'>{packageData?.price}</h2>
                            </div>
                            <div className='bg-blue-500 flex-grow-1 flex justify-content-center align-items-center'>
                                <span className='text-white font-semibold'>Per Person</span>
                            </div>

                        </div>

                    </div>
            </div>
        </div>
        

      
    </div>
  )
}

import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import packages from '../data/packages';

export default function PackageDetail() {
    const {id} = useParams()
    console.log(id)
    const [packageData, setPackageData] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const handlePackage = ()=>{
        const data = packages.filter((item)=>item.id == id)
        setPackageData(data)
        setLoading(false)
    }
    useEffect(()=>{
        handlePackage()
    },[])
  
  return (
    <div className='min-h-screen'>
        <div className='h-5rem lg:h-6rem'></div>
        <h1>Package Detail</h1>
        {loading ? <h1>Loading...</h1> : <div>
            {packageData.map((item)=>(
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>}

      
    </div>
  )
}

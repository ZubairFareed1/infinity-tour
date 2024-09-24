import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className='h-screen ' >
        <div className=' h-screen w-screen flex flex-column align-items-center justify-content-center'>

       <h3> 404 Page Not Found</h3>
        <br />
        <Link to="/">Go to Home</Link>
        </div>
      
    </div>
  )
}

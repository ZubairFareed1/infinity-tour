import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/SignIn.css'
export default function SignIn() {
  const navigate = useNavigate()
  return (
    <div  className='signin-container relative'>

      <div className='signin-form bg-white-alpha-70 w-20rem absolute'>
        <h1>Sign In</h1>
        <form className=''>
          <input type="text" placeholder='Email' className='block' />
          <input type="password" placeholder='Password' className='block' />
          <button type='submit'>Sign In</button>
        </form>
        <p>Don't have an account? <span onClick={()=>navigate('/signup')}>Sign Up</span></p>
      </div>
      
    </div>
  )
}

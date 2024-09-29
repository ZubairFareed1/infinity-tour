import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Image } from 'primereact/image';

import {Divider} from 'primereact/divider';
import { Button } from 'primereact/button';


import '../styles/SignIn.css';
import 'primeicons/primeicons.css'; // Ensure this line is included

import { useAuth } from '../contexts/AuthContext';


export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const {login} = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Signing in with:', email, password);
    if(password==='Jamali@1212'&&email==='jamali1212@gmail.com'){
      login();
      navigate('/dashboard'); // Example navigation
    }else{
      alert('Invalid Credentials');
    }
    
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }


  return (
    <div className='signin-container h-screen flex align-items-center justify-content-center bg-blue-50'>
      <div className='w-screen md:w-20rem h-screen md:h-30rem bg-white-alpha-80 shadow-4 md:border-round-md border-noround card p-4'>
        <div>
          <div className='flex justify-content-center'>
            <Image src='logo2.png' alt="logo" height="80" />
          </div>

          <div className='flex justify-content-center'>
            <h2 className='mt-0 text-3xl text-600'>Login</h2>
          </div>

          <form onSubmit={handleSubmit} className='mt-2'>
            <div className="h-3rem mb-3 ">
              <input type="email" placeholder='Email address' className='w-full h-full pl-2 text-base custom-input' value={email} onChange={handleEmail}/> 
            </div>

            <div className="h-3rem mb-6">
            <input type="password" placeholder='Password' className='custom-input w-full h-full pl-2 text-base bg-white' value={password} onChange={handlePassword} />  
            <div className='flex justify-content-end mt-1'><NavLink className={`text-blue-600 text-sm`}>Forgot Password</NavLink></div>
            </div>

            <div className=''>
              <Button label="Sign In" className='w-full text-md' size='large'/>

            </div>

            <Divider  >
             <small className='bg-white-alpha-80'>OR</small>

            </Divider>

            <div className='flex justify-content-center mt-4'>
              <small>Don’t have an account? <NavLink to={`/signup`} className={`text-blue-600`}>Sign Up</NavLink></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
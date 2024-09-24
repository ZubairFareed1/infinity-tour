import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Image } from 'primereact/image';
import {Divider} from 'primereact/divider';
import { Button } from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import logo from '../assets/logo.png';
import '../styles/SignIn.css';
import 'primeicons/primeicons.css'; // Ensure this line is included


export default function SignIn() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Signing in with:', email, password);
    if (checked ?? email ?? password ?? fullname) {
      navigate('/signin');
    }else{
      alert('Please fill in all fields');
    }
    

    
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleFullname = (e) => {
    setFullname(e.target.value);
  }
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <div className='signin-container h-screen flex align-items-center justify-content-center bg-blue-100'>
      <div className='w-screen md:w-20rem h-screen md:h-auto bg-white-alpha-80 shadow-4 md:border-round-md border-noround card p-4'>
        <div>
          <div className='flex justify-content-center'>
            <Image src={logo} alt="logo" height="80" />
          </div>

          <div className='flex justify-content-center'>
            <h2 className='mt-0 text-3xl text-600'>Sign Up</h2>
          </div>

          <form onSubmit={handleSubmit} className='mt-2'>
          <div className="h-3rem mb-3 ">
              <input type="text" placeholder='Name' className='w-full h-full pl-2 text-base custom-input' value={fullname} onChange={handleFullname}/>
            </div>

            <div className="h-3rem mb-3 ">
              <input type="email" placeholder='Email address' className='w-full h-full pl-2 text-base custom-input' value={email} onChange={handleEmail}/>
            </div>

            <div className="h-3rem mb-3">
            <input type="password" placeholder='Password' className='custom-input w-full h-full pl-2 text-base bg-white' value={password} onChange={handlePassword} />  
            </div>
            <div className='h-3rem mb-1'>
            <Checkbox inputId="check" name="pizza" value="Cheese" onChange={handleCheckboxChange} checked={checked} />
            <label htmlFor="check" className="ml-2 text-xs text-color-secondary">I agree to the <NavLink className={`text-blue-600`}>terms of service</NavLink>  and <NavLink className={`text-blue-600`} >privacy policy.</NavLink></label>
            </div>

            <div className=''>
              <Button label="Create an Acoount" className='w-full text-base' size='large'/>

            </div>

            <Divider  >
             <small className='bg-white-alpha-80'>OR</small>

            </Divider>

            <div className='flex justify-content-center mt-4'>
              <small className='text-color-secondary'>Already have an account? <NavLink to={`/signin`} className={`text-blue-600`}>Sign In</NavLink></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
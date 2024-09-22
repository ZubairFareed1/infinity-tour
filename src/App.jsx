import React from 'react'
//Import Pages 
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import Offers from './pages/Offers';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';



import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
export default function App() {
  const location = useLocation();
  return (
    <div className=''>

       {(location.pathname=="/signin")?'':<Navbar/>} 

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destinations/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/packages' element={<Packages/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/blog' element={<Blogs/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/offers' element={<Offers/>}/>
        </Routes>
    </div>
  )
}

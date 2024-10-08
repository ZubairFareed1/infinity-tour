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
import Dashboard from './pages/Dashboard';
import Page404 from './pages/Page404';

import ScrollToTop from './components/ScrollTop';


const predefinedRoutes = [ '/', '/destination', '/contactus', '/packages', '/blog', '/aboutus', '/offers', '/packages/package_detail/'];
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import PackageDetail from './pages/PackageDetail';
export default function App() {
  const location = useLocation();
  const shouldHideNavbar = !['/signin', '/signup', '/dashboard'].includes(location.pathname);
  return (
    <div className='' style={{backgroundColor:'#F8F8F8'}}>

        <ScrollToTop />

       {shouldHideNavbar && <Navbar/>} 

        <Routes>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>


          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destinations/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/packages' element={<Packages/>}/>
          <Route path='/blog' element={<Blogs/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/offers' element={<Offers/>}/>
          <Route path='*' element={<Page404/>}/>
          <Route path='/packages/package_detail/:id' element={<PackageDetail />} />
          {/* Protected Routes */}
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
            }/>
        </Routes>

        {shouldHideNavbar && <Footer/>}
    </div>
  )
}

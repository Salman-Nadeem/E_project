import React from 'react'

import './Style.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import LoginPage from './Pages/Login';
import Contact from './Pages/Contact+'
import AboutUs from './Pages/About_us';
import Checkout from './Pages/CheckOut';
import Cart from './Pages/Cart';
import Room from './Pages/Room';
import RoomDetails from './Pages/RoomDetail';
import Home from './Pages/Home';
import FAQPage  from './Pages/Faq';
import MobileNav from './Component/navbarScroll';
import SearchPopup from './Component/Searchpoup';


const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Navbar/>

    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Room" element={<Room/>}/>
      <Route path="/detail" element={<RoomDetails/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/faq" element={<FAQPage/>}/>
    </Routes>
    </BrowserRouter>
<Footer/>
</>  )
}

export default App
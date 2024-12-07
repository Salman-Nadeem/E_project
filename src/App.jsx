import React from 'react'

import './Style.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import LoginPage from './Pages/Login';


const App = () => {
  return (
    <>
    <BrowserRouter>

    <Navbar/>

    <Routes>
      <Route path="/" element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>

</>  )
}

export default App
import React from 'react'
import './Body.css'
import {  Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer'
import About from '../About/About'
import Service from '../Service/Service'
import Work from '../Work/Work'
import Blogs from '../Blogs/Blogs'
function Animation() {

  const location = useLocation();

  return (
    <AnimatePresence>
        <div id='Body' className="body">

            {/* <motion.div id='SlideUp' className="slideUp" initial={{ y:0, }} animate={{ y:-600,}} transition={{duration: 0.5, delay: 10}}>
                <h1 id='SlideUp-Title'>Web Coder2425</h1>
            </motion.div> */}

            <Navbar/>
            <Routes location={location} key={location.pathname} >
                <Route path='/' element={<Hero/>}/>
                <Route path='/work' element={<Work/>}/>
                <Route path='/services' element={<Service/>}/>
                <Route path='/blogs' element={<Blogs/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
            <Footer/>    
        </div>
    </AnimatePresence>
  )
}

export default Animation
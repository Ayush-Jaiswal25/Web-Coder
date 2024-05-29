import React from 'react'
import './Hero.css'
import { hero } from '../../func';
import { Link } from 'react-router-dom';
import HeroBox1 from '../HeroBox1/HeroBox1'
import HeroBox2 from '../HeroBox2/HeroBox2'
import SSinsta from '../../assets/web-insta.jpg'
import upRight from '../../assets/upRight.png'
import HeroBlog1 from '../HeroBlog1/HeroBlog1';


function Hero() {

  hero();

  return (
    <div  id='Hero' className="hero">

      <div className="hero-section">

        <div className="sub-hero-left">

          <HeroBox1/>

          <div className="SHLD sub-hero-left-down-left">
            <h2 className='SHLD-h2'>Harshika Yadav</h2>
            <p className='SHLD-p'>She is a Full Stack Web Developer with specializaton in Web Desiginng and React Based Frontend Development</p>
            <Link to='/about'><button className='SHLD-button'>Profile</button></Link>
          </div>

          <div className="SHLD sub-hero-left-down-right">        
            <h4 className='SHLD-h4'>Services</h4>
            <p className='SHLD-p'>From front-end development and web designing to complete websites. We also create custom websites as per clients demand.</p>
            <Link to='/services'><button className='SHLD-button'>View Services</button></Link>
          </div>

        </div>

        <HeroBox2/>
        
      </div>

      <div className="lower-hero">

        <div className="lower-hero-left">
          <h1 className='lower-hero-left-h1' >Instagram</h1>
          <div className="sub-lower-hero-left">
            <img className='SSinsta' src={SSinsta} alt="" />
            <h2 className='sub-lower-hero-left-h2' >Follow to Learn, Design and Develop <a href=" https://www.instagram.com/web_coder2425/"><img className='upRight' src={upRight} alt="" /></a> </h2>
          </div>
        </div>

        <HeroBlog1/>

      </div>
      
    </div>
  )
}

export default Hero
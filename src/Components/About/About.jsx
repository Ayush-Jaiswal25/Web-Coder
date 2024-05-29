import React from 'react'
import './About.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

import Linkedin from '../../assets/linkedin.svg'
import insta from '../../assets/instagram.svg'
import Fooder from '../../assets/fooder.png'
import Hotel from '../../assets/hotel.png'
import Blog from '../../assets/blogs.png'
import Discord from '../../assets/discord.png'
import Brick from '../../assets/brick_ball.png'
import Tic from '../../assets/criss_cross.png'
import HPhoto from '../../assets/Momo.jpg'
import APhoto from '../../assets/DP.jpg'
import Keyboard from '../../assets/keyboard.jpg'

import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div id='Profile' className='profile'>
      
      <div className="subProfile">

        <div className="devBox Dev-H-box">
          <div className=" profileIMG H_Profile"> <img src={HPhoto} alt="" /> </div>
          <div className="H_description"><span>Hey, I'm Harshika — a creative developer from Prayagraj, India.</span>I am skilled in creating any kind of website, from sleek corporate sites to dynamic e-commerce platforms. With strong command over technologies like HTML, CSS, JavaScript, React, Node.js, and more, I deliver high-quality, responsive, and user-friendly web solutions. Let's collaborate to bring your vision to life with efficient, tailored, and reliable web development services.</div>
          <div className="Hsocial_icon social_icon">
            <a href="https://www.linkedin.com/in/harshika-yadav25/"><img src={Linkedin} alt="" /></a>
            <img src={insta} alt="" />
          </div>
          <div className="Hblogs1 blogs1">  </div>
          <div className="Hblogs2 blogs2">
            <h2>Web Development Vs App Development</h2>
            <h4>What you should choose?</h4>
            <Link to='/blogs'><button>Read post</button></Link>
          </div>
        </div>

        <div className="devBox Dev-A-box">
          <div className="A_description"><span>I design digital interfaces</span> <label> From a young age, I've been fascinated by the world of computers and software. Along the way, I've developed a keen interest in visual design, so i focus on both design and development — allowing me to work on projects with clear idea, unique layouts, and great typography which end up creating a great websites.</label></div>
          <div className="profileIMG A_Profile"><img src={APhoto} alt="" /></div>
          <div className="Ablogs1 blogs1"> <img src={Keyboard} alt="" /> </div>
          <div className="Asocial_icon social_icon">
            <a href="https://www.linkedin.com/in/ayush-jaiswal25/"><img src={Linkedin} alt="" /></a>
            <a href="https://www.instagram.com/_25_aj/"><img src={insta} alt="" /></a>
          </div>    
          
        </div>

      </div>

    </div>
  )
}

export default Profile
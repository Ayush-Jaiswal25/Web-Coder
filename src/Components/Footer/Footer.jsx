import React from 'react'
import './Footer.css'
import b_insta from '../../assets/black_insta.svg'
import b_link from '../../assets/linkedin.png'
import b_YT from '../../assets/youtube.png'
import copyright from '../../assets/copyright.png'
import { Link } from 'react-router-dom'
function Footer() {
  
  function clickHome() {
    
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <div id='Footer' className="footer">

      <div className="footerCenter  navigation">
        <h3>Navigation</h3>
        <Link to='/work'><h4 onClick={clickHome}>Work</h4></Link>
        <Link to='/services'><h4 onClick={clickHome}>Services</h4></Link>
        <Link to='/blogs'><h4 onClick={clickHome}>Blogs</h4></Link>
        <Link to='/about'><h4 onClick={clickHome}>About Us</h4></Link>
      </div>

      <div className="footerCenter footersocial">
        <h3>Follow Us</h3>

        <a href="https://www.instagram.com/web_coder2425/" target='_blank'>
          <div className="div_insta socialDiv">
            <img className='instafooter' src={b_insta} alt="" />
            <h4>Instagram</h4>
          </div>
        </a>

        <a href="#">
          <div className="div_link socialDiv">
            <img className='linkfooter' src={b_link} alt="" />
            <h4>Linked In</h4>
          </div>
        </a>

        <a href="https://www.youtube.com/@Webcoder2425" target='_blank'>
          <div className="div_YT socialDiv">
            <img className='YTfooter' src={b_YT} alt="" />
            <h4>You Tube</h4>
          </div>
        </a>
      </div>

      <div className="footerCenter contact">
        <h4>Email: webcoder@gmail.com</h4>
      </div>

      <div className="footer_last">
        <img src={copyright} alt="" />
        <h3>2024 Web Coder</h3>
      </div>

    </div>
  )
}

export default Footer
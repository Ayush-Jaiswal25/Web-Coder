import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import HamMenu from '../../assets/menu.svg'
function Navbar() {

  const [menu, setMenu] = useState("");

  function clickHome() {
    setMenu("")
    window.scrollTo({top: 0, behavior: "smooth"})
  }
  function clickContact() {
    window.scrollTo({top: 5000, behavior: "smooth"})
  }
  
  function clickUser(){
    const phonenav = document.querySelector('.phone-nav');
    phonenav.classList.add('phone-nav-down');
    console.log("user was clicked");

  }


  return (
    <div className="navbar">
      <Link to='/'><div onClick={()=> clickHome()} className="sub-navbar2">HOME</div></Link>
      <div className="sub-navbar1">
        <div className="sub-navbar1-right">
          <Link to='/work'><p onClick={() => setMenu("Work")} className={menu === "Work" ? "active nav-option" : "nav-option"}>Work</p></Link>
          <Link to='/services'><p onClick={() => setMenu("Service")} className={menu === "Service" ? "active nav-option" : "nav-option"}>Services</p></Link>
          <Link to='/blogs'><p onClick={() => setMenu("Blogs")} className={menu === "Blogs" ? "active nav-option" : "nav-option"}>Blogs</p></Link>
          <Link to='/about'><p onClick={() => setMenu("About")} className={menu === "About" ? "active nav-option" : "nav-option"}>About Us</p></Link>
        </div>
        <p onClick={()=> clickContact()} className='nav-option '>Contact</p>
      </div>
      <a id="user-btn" onMouseEnter={clickUser}><img src={HamMenu} /></a>
      <div className="phone-nav">
        <Link to='/work'><p>Work</p></Link>
        <Link to='/services'><p>Service</p></Link>
        <Link to='/blogs'><p>Blogs</p></Link>
        <Link to='/about'><p>About</p></Link>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Navbar
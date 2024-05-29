import React from 'react'
import './Service.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import StaticWeb from '../../assets/StaticWeb.png'
import PortfolioWeb from '../../assets/portfolioWeb.png'
import DynamicWeb from '../../assets/DynaWeb.png'
import EcomWeb from '../../assets/EcomWeb.png'
function Service() {
  return (
    <div id='Service' className='service'>

      <div className="serviceHero">
          <h1>Service</h1>
          <p>We work to create pathways for you and your customer to connect in a simple manner. Our work help your business grow. </p>
      </div>

      <div className="serviceoffer serleft">
        <img src={StaticWeb} alt="" />
        <h1>Static Website</h1>
        <h4>A static site is built with pages of plain HTML, CSS, or Javascript code. This content stays consistent regardless of the user and offers little interactivity. </h4>
      </div>

      <div className="serviceoffer serright">
        <img src={PortfolioWeb} alt="" />
        <h1>Portfolio Website</h1>
        <h4>A portfolio website is a curated, online space that showcases your best work. It's one of the most practical and memorable ways to share your work.</h4>
      </div>

      <div className="serviceoffer serviceoffer3 serleft">
        <img src={DynamicWeb} alt="" />
        <h1>Dynamic Website</h1>
        <h4>A dynamic website is a site that generates pages in real time, responding to dynamic characteristics such as user input and past actions. The structure and content of a dynamic web page are flexible, allowing you to customize the end-user’s experience based on the users request.</h4>
      </div>

      <div className="serviceoffer serviceoffer4 serright">
        <img src={EcomWeb} alt="" />
        <h1>E-Commerce Website</h1>
        <h4>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet. It can be the best way to expand your business. </h4>
      </div>


    </div>
  )
}

export default Service
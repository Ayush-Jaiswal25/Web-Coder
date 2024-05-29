import React from 'react'
import './HeroBox1.css'
import Linkedin from '../../assets/linkedin.svg'
import insta from '../../assets/instagram.svg'

function HeroBox1() {
  return (
    <div className="heroBox1">
      <h3 className='heroBox1-h3'>Web Coder</h3>
      <h1 className='heroBox1-h1'>Need Website for your business?</h1>
      <h4 className='heroBox1-h4'>Based in Greater Noida, India, We helps businesses create their online presence easily. We design and build custom websites featuring to your brand and goals.</h4>
      <a href="#" target="_blank"><img className='heroBox1-img heroBox1-linkImg' src={Linkedin} alt="" /></a>
      <a href="https://www.instagram.com/web_coder2425/" target="_blank"><img className='heroBox1-img heroBox1-instaImg' src={insta} alt="" /></a>
    </div>
  )
}

export default HeroBox1
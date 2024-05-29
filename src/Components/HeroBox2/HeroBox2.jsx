import React from 'react'
import './HeroBox2.css'
import Prowork from '../../assets/prowork.png'

function HeroBox2() {
  return (
    <div className="heroBox2">
        <h5 className='heroBox2-h5'>Latest Project</h5>
        <a href=""><h2 className='heroBox2-h2'>Pro Work</h2></a>
        <p className='heroBox2-p'>This is a service based company website delivering daily household service to their customer.</p>
        <img className='heroBox2-img' src={Prowork} alt="" />
    </div>
  )
}

export default HeroBox2
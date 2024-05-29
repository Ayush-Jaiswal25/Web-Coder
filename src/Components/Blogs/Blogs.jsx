import React from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom'
import HeroBlog1 from '../HeroBlog1/HeroBlog1'

function About() {
  return (
    <div id='Blogs' className='bblogs'>

      <div className="blogsHero">
        <h1 className="blogsHero-h1" >Blogs</h1>
        <h4 className='blogsHero-h4'>We post weekly blogs on topics related to teachnology as well as our personal journey in becoming a better Web Developer from yesterday.</h4>
      </div>
  
      <HeroBlog1/>

      <div className="BHblogs2 blogs2">
        <h2 className='BHblogs2-h2' >Web Development Vs App Development</h2>
        <h4 className='BHblogs2-h4' >What you should choose?</h4>
        <Link to='/blogs'><button className='BHblogs2-btn'>Read post</button></Link>
      </div>
 
    </div>
  )
}

export default About
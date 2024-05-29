import React from 'react'
import './HeroBlog1.css'
import { Link } from 'react-router-dom'

function HeroBlog1() {
  return (
    <div className="heroBlog1">
      <h3 className='heroBlog1-h3' >Blogs</h3>
      <h1 className='heroBlog1-h1' >How to start Web Development in 2024 </h1>
      <Link to='/blogs'><button className='heroBlog1-img' >Read post</button></Link>
    </div>
  )
}

export default HeroBlog1
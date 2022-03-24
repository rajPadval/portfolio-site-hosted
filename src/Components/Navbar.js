import React from 'react'
import { Link } from 'react-router-dom'
import '../Component_css/Navbar.css'
const Navbar = () => {
  return (
    
    <div className='navbar'>
      <div className="brand">
        <h3>Raj padval</h3>
      </div>
        <ul>
           <Link to='/' className='link'><li>Home</li></Link> 
           <Link to='/about' className='link'><li>About</li></Link> 
           <Link to='/contact' className='link'><li>Contact</li></Link> 
        </ul>
    </div>
  )
}

export default Navbar
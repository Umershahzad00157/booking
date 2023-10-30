import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
    <div  className='nav_main'>
    <div className='logo'>
    <h1 className='title'>Book your ticket</h1>
    </div>
    <div className='navigation'>
    <ul className='flx'>
    <li>
    <Link className='nav' to="/signup"> SignUp</Link>
    </li>
    <li>
    <Link className='nav' to="/login"> Login</Link>
    </li>
    </ul>
    </div>
    
    
    </div>
    <hr className='nav_ends'></hr>
    
    </div>
  )
}

export default NavBar;

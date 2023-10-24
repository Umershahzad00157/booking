import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'

const NavBar = () => {
  return (
    <div >
    <ul className='flx'>
    <li>
    <Link className='nav' to="/signup"> SignUp</Link>
    </li>
    <li>
    <Link className='nav' to="/login"> Login</Link>
    </li>
    </ul>
      
    </div>
  )
}

export default NavBar;

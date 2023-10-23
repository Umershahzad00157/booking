import React from 'react';
import Inputs from './Inputs';
import Button from './Button';


const Login = () => {
  return (
    <div>
    <center>
    <div className='main bdy'>
    <h1>Log In</h1>
    <div className='ip1'>
    <label className='labl'>ENTER YOUR EMAIL</label>
    <Inputs type = "email"  title = "Enter your email"/>
    </div>
    <div className='ip1'>
    <label className='labl'>ENTER YOUR PASSWORD</label>
    <Inputs type = "password"  title = "Enter your password"/>
    </div>
    <Button title= "LogIn"/>
    </div>
    </center>
    </div> 
  )
}

export default Login


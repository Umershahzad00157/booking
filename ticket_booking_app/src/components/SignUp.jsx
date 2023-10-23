import React from 'react'
import Inputs from './Inputs';
import Button from './Button';

const SignUp = () => {
  return (
    <div >
    <center>
    <div className='main'>
    <h1>Sign Up</h1>
    <div className='ip1'>
    <label className='labl'>ENTER FULL NAME</label>
    <Inputs type ="text" title = "Enter your full name "/>
    </div>
    <div className='ip1'>
    <label className='labl'>ENTER YOUR EMAIL</label>
    <Inputs type = "email"  title = "Enter your email"/>
    </div>
    <div className='ip1'>
    <label className='labl'>ENTER YOUR PASSWORD</label>
    <Inputs type = "password"  title = "Enter your password"/>
    </div>
    <Button title= "SignUp"/>
    </div>
    </center>
    </div>
  )
}

export default SignUp;

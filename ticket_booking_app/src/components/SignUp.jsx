import React, { useState } from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Signup from './api/user/SignUp';

const SignUp = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
 
  const navigate = useNavigate();

const handleSubmit = async ()=>{
  console.log(`name : ${name}`);
  console.log(`email : ${email}`);
  console.log(`password : ${password}`);

const response = await Signup(name, email, password);


if (response===201){
      console.log(response);
      navigate("/login");
    }
    else{
      console.log("signup failed");
    }
}

  return (
    <div >
    <center>
    <div className='main'>
    <h1>Sign Up</h1>
    <div className='ip1'>
    <label className='labl'>ENTER FULL NAME</label>
    <input className='input' onChange = {handleNameChange} value = {name} type ="text" title = "Enter your full name "/>
    </div>
    <div className='ip1'>
    <label className='labl'>ENTER YOUR EMAIL</label>
    <input className='input' onChange = {handleEmailChange} value = {email} type = "email"  title = "Enter your email"/>
    </div>
    <div className='ip1'>
    <label className='labl'>ENTER YOUR PASSWORD</label>
    <input className='input' onChange = {handlePasswordChange} value = {password} type = "password"  title = "Enter your password"/>
    </div>
    <Button  title= "SignUp" onHandleSubmit = {()=>handleSubmit()} />
    </div>
    </center>
    </div>
  )
}

export default SignUp;

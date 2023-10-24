import React, { useState } from 'react'
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import LogIn from './api/user/login';

const Login = () => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
 
  const navigate = useNavigate();

const handleSubmit = async ()=>{
  console.log(`email : ${email}`);
  console.log(`password : ${password}`);

const response = await LogIn( email, password);


if (response===201){
      console.log(response);
      navigate("/signin");
    }
    else{
      console.log("LogIn failed");
    }
}

  return (
    <div >
    <center>
    <div className='main'>
    <h1>LogIn</h1>
    
    <div className='ip1'>
    <label className='labl'>ENTER YOUR EMAIL</label>
    <input className='input' onChange = {handleEmailChange} value = {email} type = "email"  title = "Enter your email"/>
    </div>
    <div className='ip1'>
    <label className='labl'>ENTER YOUR PASSWORD</label>
    <input className='input' onChange = {handlePasswordChange} value = {password} type = "password"  title = "Enter your password"/>
    </div>
    <Button  title= "LogIn" onHandleSubmit = {()=>handleSubmit()} />
    </div>
    </center>
    </div>
  )
}

export default Login;

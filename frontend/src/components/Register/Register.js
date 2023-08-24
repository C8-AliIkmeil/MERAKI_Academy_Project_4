import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import "./Register.css"
import Backtologin from '../Backtologin/Backtologin'
import { Route,Router } from 'react-router-dom'
const Register = (req,res) => {
const navigate = useNavigate()
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [age, setAge] = useState("")
const [location, setLocation] = useState("")
const [successMessage, setSuccessMessage] = useState("")
const [errorMessage, setErrorMessage] = useState("")
    return (
        
    <div className='register'>
        
        <div className='title'></div>
        <div className='loginbutton'> 
        Already have accout?
        <button onClick={()=>{
            navigate("/users/login")
        }}>Login</button>
        
        </div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tokyoship_Home_icon.svg/768px-Tokyoship_Home_icon.svg.png" className='homebutton' onClick={()=>{
        navigate("/")
    }}/>
    <br/>
    <br/>
    <div>Make your Khalek Bdarak accout from here</div>
    <br/>
    Kindly fill your information to make your account
    <br/>
    <br/>
    <input type='text' placeholder='First name' onChange={(e)=>{
        setFirstName(e.target.value)
    }}/>
    <br/>
    <br/>
    <input type="text" placeholder='Last name' onChange={(e)=>{
        setLastName(e.target.value)
    }}/>
    <br/>
    <br/>
    <input type="email" placeholder='Email' onChange={(e)=>{
        setEmail(e.target.value)
    }}/>
    <br/>
    <br/>
    <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
    <br/>
    <br/>
    <input type="number" placeholder='Age'
    onChange={(e)=>{
        setAge(e.target.value)
    }}/>
    <br/>
    <br/>
    <input type="text" placeholder='Location' onChange={(e)=>{setLocation(e.target.value)}}/>
    <br/>
    <br/>
    
    <button className='addaccount' onClick={()=>{

        axios.post("http://localhost:5000/users/register",{firstName,lastName,email,password,age,location})
        .then((response)=>{
            setSuccessMessage(response.data.message)
        })
        .catch((err)=>{
            setErrorMessage(err.message)
        })

    }}>Make account</button>
        {successMessage&&<>{navigate("/backtologin")}</>}
        {errorMessage&&<div>{errorMessage}</div>}
        
    </div>
  )
}

export default Register
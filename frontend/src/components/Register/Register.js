import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import "./Register.css"

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
    <button className='homebutton' onClick={()=>{
        navigate("/home")
    }}>Home Page</button>
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
            res.status(201).json({
                success:true,
                message:"User Added Successfully",
                
            })
        })
        .catch((err)=>{
            setErrorMessage(err.message)
            res.status(500).json({
                success:false,
                message:"Something went wrong kindly try again"
            })
        })
        {successMessage&&<div>
            User Added Successfully
        <button className='returntologin' onClick={()=>{
            navigate('/users/login/')
        }} ></button>
        </div>}

    }}>Make account</button>
    </div>
  )
}

export default Register
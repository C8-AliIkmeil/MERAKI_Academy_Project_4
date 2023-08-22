import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import "./Login.css"
const Login = () => {
const navigate = useNavigate()
    return (
    <div>Login
        <button className='registerbutton' onClick={()=>{
            navigate("/users/register")
        }}>Sign Up</button>
    </div>
  )
}

export default Login
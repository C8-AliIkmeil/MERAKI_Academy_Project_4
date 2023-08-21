import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const Register = () => {
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
        Register
        hellooooo
    
    </div>
  )
}

export default Register
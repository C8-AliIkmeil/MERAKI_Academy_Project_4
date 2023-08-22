import React,{useState,useEffect, useContext} from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import "./Login.css"
import { tokenContext } from '../../App'


const Login = () => {
const navigate = useNavigate()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [loginSucces, setLoginSucces] = useState("")
const [errorMessage, setErrorMessage] = useState("")
const {setToken} = useContext(tokenContext)
const {setIsLoggedIn}=useContext(tokenContext)    
return (
    <div className='loginPage'>
        <button className='registerbutton' onClick={()=>{
            navigate("/users/register")
        }}>Sign Up</button>
        <img className="icon" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tokyoship_Home_icon.svg/768px-Tokyoship_Home_icon.svg.png' onClick={()=>
    navigate("/")}/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    Login
    <br/><br/>
    <input type='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
    <br/><br/> 
    <input type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
    <br/><br/>
    <button className='loginButton' onClick={()=>{
        axios.post("http://localhost:5000/users/login",{email,password})
        .then((response)=>{
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            navigate("/loggedin")
        })
        .catch((err)=>{
            setErrorMessage(err.message)
            console.log(err);
        })
    }}>Login</button>
    <br></br>
    {errorMessage&&<>Email or password that you entered is incorrect</>}
    </div>
  )
}

export default Login
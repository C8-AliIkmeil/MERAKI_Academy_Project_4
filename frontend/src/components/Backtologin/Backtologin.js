import React,{useState,useEffect} from 'react'
import "./Backtologin.css"
import { useNavigate } from 'react-router-dom'
const Backtologin = () => {
  const navigate = useNavigate()
    return (
    <div className='backtologindiv'>Congrats :D 
        You're one of Khalek Bdarak team now 
        <button onClick={()=>{
            navigate("/users/login/")
        }}>Back to login page</button>
    </div>
  )
}

export default Backtologin
import React,{useState,useEffect,useContext} from 'react'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Cart = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("")
  })
    return (
    <div>
        <button className='homepage' onClick={()=>{
            navigate("/loggedin")
        }}>Back to home page</button>
    </div>
  )
}

export default Cart
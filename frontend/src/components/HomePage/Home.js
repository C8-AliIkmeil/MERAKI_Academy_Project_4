import React from 'react'
import "./Home.css"
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='Home'>
        <h1>Khalek Bdarak SuperMarket</h1>
        <button className="signupbutton" onClick={()=>{
            navigate("/users/register")
        }}>Sign Up</button>
        <button className='loginbutton' onClick={()=>{
            navigate('/users/login')
        }}>Login</button>
        <Categories/>
        <Products/>
    </div>
  )
}

export default Home
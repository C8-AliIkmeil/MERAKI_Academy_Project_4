import React from 'react'
import "./Home.css"
import { useState,useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import axios from 'axios'
const Home = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [searchResuls, setSearchResuls] = useState("")
    return (
    
    <div className='Home'>
        <h1>Khalek Bdarak SuperMarket</h1>
        <input type='search' placeholder='Search' className='search' onChange={(e)=>{
        navigate("/search")
        }}/>
        {searchResuls &&<>{searchResuls.map((elem,i)=>{
          console.log(searchResuls);
          return (<>{elem.name}</>)
        })}</>}
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
import React, { useContext } from 'react'
import "./Home.css"
import { useState,useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import axios from 'axios'
import { tokenContext } from '../../App'
import {FcSearch} from "react-icons/fc"
const Home = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    return (
    
    <div className='Home'>
        {/* <div className='navBarrows'> */}
        {/* <div></div> */}
        <div className="navBar">
          <div></div>
      <img src="https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg" className="logo"/>
      <h1>Khalek Bdarak SuperMarket</h1>

        {/* <img className='searchButton' src='https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg' onClick={()=>{
          navigate("/search")
        }}/> */}
        <FcSearch className='searchButton' onClick={()=>{
          navigate("/search")
        }}/>
        <div className='loginbox'>
        <button className="signupbutton" onClick={()=>{
          navigate("/users/register")
        }}>Sign Up</button>
        <button className='loginbutton' onClick={()=>{
          navigate('/users/login')
        }}>Login</button>
        </div>
        <div></div>
        </div>
        {/* <div></div> */}
        {/* </div> */}
        <div className='categories'>
        
        <Categories className="gg" />
        <div className='contactus'>
        Contact us : 0797107737
        </div>
        </div>
        {/* <Products/> */}
    </div>
  )
}

export default Home
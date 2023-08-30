import React,{useState,useEffect,useContext} from 'react'
import "./LoggedIn.css"
import { useNavigate } from 'react-router-dom'
import { tokenContext } from '../../App'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'
import {FcSearch} from "react-icons/fc"
const LoggedIn = () => {
const {setToken,userName}=useContext(tokenContext)
const navigate = useNavigate()    

return (
    <div className='loggedin'>
        <div className='navBarloggedin'>
        <img src='https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg' className='homepagebuttonloggedin' onClick={()=>{
        navigate("/loggedin")
        }}/>
    <img className='yourcartloggedin' src="https://cdnimg.webstaurantstore.com/images/products/large/446099/1740901.jpg" onClick={()=>{
        navigate("/cart")
    }}/>
        <h1>Khalek Bdarak SuperMarket</h1>
        <div className='box'>

        <div className='username'>Welcome {userName}</div>
        {/* <br/> */}
        <div className='testo'>

        <FcSearch className='searchbuttonloggedin' onClick={()=>{
            navigate("/search")
        }}/>
        

        <button className='logoutbuttonloggedin test' onClick={()=>{
            localStorage.clear()
            setToken(null)
            navigate("/")
        }}>LogOut</button>
<button className="addporductsbutton test"onClick={()=>{
    navigate("/addproduct")
}}>Add Products</button>
</div>
</div>
        
        </div>
        <Categories/>
        {/* <Products/> */}
    </div>
  )
}

export default LoggedIn
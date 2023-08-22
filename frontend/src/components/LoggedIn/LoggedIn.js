import React,{useState,useEffect,useContext} from 'react'
import "./LoggedIn.css"
import { useNavigate } from 'react-router-dom'
import { tokenContext } from '../../App'
const LoggedIn = () => {
const {setToken}=useContext(tokenContext)
const {userName}=useContext(tokenContext)
const navigate = useNavigate()    
return (
    <div className='loggedin'><h1>Khalek Bdarak SuperMarket</h1>
        <div className='username'>Welcome {userName}
        <br/>
        <button className='logoutbutton' onClick={()=>{
            localStorage.clear()
            setToken(null)
            navigate("/")
}}>LogOut</button>
</div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tokyoship_Home_icon.svg/768px-Tokyoship_Home_icon.svg.png' className='homepagebutton' onClick={()=>{
        navigate("/")
        }}/>
    </div>
  )
}

export default LoggedIn
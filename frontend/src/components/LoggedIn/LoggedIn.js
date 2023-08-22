import React,{useState,useEffect,useContext} from 'react'
import "./LoggedIn.css"
import { useNavigate } from 'react-router-dom'
import { tokenContext } from '../../App'
const LoggedIn = () => {
const {setToken}=useContext(tokenContext)
    return (
    <div>LoggedIn
        <button className='logoutbutton' onClick={()=>{

        }}>LogOut</button>
    </div>
  )
}

export default LoggedIn
import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Categorycomponent.css"
import { tokenContext } from '../../App'
const Categorycomponent = () => {
  const {productsCateg,token} = useContext(tokenContext)  
  const navigate = useNavigate()
  return (
    <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tokyoship_Home_icon.svg/768px-Tokyoship_Home_icon.svg.png' className='homepagebutton' onClick={()=>{
            if (token){
                navigate("/loggedin")
            }else{
                navigate("/")
            }
            
        }}/>
        {productsCateg.map((product,i)=>{
            return(<div className='productCard'>
                <img className='productImg' src={product.img}/>
                <div className='productName'>{product.name}</div>
                <div className='productPrice'>{product.price}</div>
            </div>)
        })}
        </div>
  )
}

export default Categorycomponent
import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Categorycomponent.css"
import { tokenContext } from '../../App'
const Categorycomponent = () => {
  const {productsCateg,token,userId,productId,userName} = useContext(tokenContext)  
  const navigate = useNavigate()
  return (
    
    <div className='categorycomponent'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tokyoship_Home_icon.svg/768px-Tokyoship_Home_icon.svg.png' className='homepagebutton' onClick={()=>{
            
            if (token){
                navigate("/loggedin")
            }else{
                navigate("/")
            }
            
        }}/>
        <div className='productCard'>
        {productsCateg.map((product,i)=>{
            return(<div className='productinfo'>
            
                <img className='productImg' src={product.img}/>
                <div className='productName'>{product.name}</div>
                <div className='productPrice'>{product.price}</div>
                <img className='addtocart1' src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=' onClick={()=>{
                if (!token){
                    navigate("/users/login")
                }else{
                    // setProductId(prod._id)
                    axios.post("http://localhost:5000/cart/",{userId,productId:product._id})
                    .then((response)=>{ 
                        // console.log(response.data);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
            }}/>
            </div>)
        })}
        </div>
        </div>
  )
}

export default Categorycomponent
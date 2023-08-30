import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./Categorycomponent.css"
import { tokenContext } from '../../App' 
const Categorycomponent = () => {
  const {setToken,productsCateg,token,userId,productId,userName} = useContext(tokenContext)  
  const navigate = useNavigate()
  return (
    
    <div className='categorycomponent'>
        <div className='navbarcategories'>
        <div></div>
        <img src='https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg' className='homepagebuttoncategories' onClick={()=>{
            
            if (token){
                navigate("/loggedin")
            }else{
                navigate("/")
            }
            
        }}/>

        <img className='yourcartcategories' src="https://cdnimg.webstaurantstore.com/images/products/large/446099/1740901.jpg" onClick={()=>{
            if (token){
            navigate("/cart")
            }else{
                navigate("/users/login")
            }
        }}/>
        <h1>Khalek Bdarak SuperMarket</h1>
        <div className='rightnavbarcategories'>
            {token?<>
        <div >Welcome {userName}</div>
        <button className='logoutbuttoncategories test' onClick={()=>{
            localStorage.clear()
            setToken(null)
            navigate("/")
        }}>LogOut</button>
        </>:<>
        <button className="signupbutton" onClick={()=>{
          navigate("/users/register")
        }}>Sign Up</button>
        <button className='loginbutton' onClick={()=>{
          navigate('/users/login')
        }}>Login</button>
        
        </>}
        </div>
        <div></div>
        </div>
        <div className='productCard'>
        {productsCateg.map((product,i)=>{
            return(<div className='productinfocategory'>
            
                <img className='productImg' src={product.img}/>
                <div className='productName'>{product.name}</div>
                <div className='productPrice'>{product.price}</div>
                <img className='addtocart2' src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=' onClick={()=>{
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
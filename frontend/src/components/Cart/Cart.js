import React,{useState,useEffect,useContext} from 'react'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { tokenContext } from '../../App'
const Cart = () => {
    const [cartList, setCartList] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const {token} =useContext(tokenContext)
    const [deletedItem, setDeletedItem] = useState("")
    const [deleteErrorMessage, setDeleteErrorMessage] = useState("")
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:5000/cart/",{headers:{Authorization:`Bearer ${token}`}})
    .then((response)=>{
        setCartList(response.data.products);
        console.log(response.data.products);
    })
    .catch((err)=>{
        console.log(err);
    })
  },[])
    return (
    <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tokyoship_Home_icon.svg/768px-Tokyoship_Home_icon.svg.png' className='homepage' onClick={()=>{
            navigate("/loggedin")
        }}/>
        <br/><br/><br/><br/><br/><br/><br/>
        {cartList?<>
        <div className='cartcard'>
            
            
            
            {cartList.map((prod,i)=>{
                return(<div className='cartproductcard'>
                    <img src={prod.productId.img} className='productimg' />
                    <div className='productid'>{prod.productId.name}</div>
                    <button className='deleteproduct' onClick={()=>{
                        // console.log(prod.productId._id);
                        axios.delete(`http://localhost:5000/cart/${prod._id}`,{headers:{Authorization:`Bearer ${token}`}})
                        .then((response)=>{
                            const filtered = cartList.filter((elem,i)=>{
                                return elem._id !== prod._id
                            })
                            setCartList(filtered)
                            // setCartList(cartList)
                        })
                        .catch((err)=>{
                            setDeleteErrorMessage("Something went Wrong please refresh your page")
                            console.log(err);
                        })
                    }}>Delete product</button>

                    <br/>
                    
                </div>)
            })}

            
        </div>
        </>:<>{errorMessage}</>}
    </div>
  )
}

export default Cart
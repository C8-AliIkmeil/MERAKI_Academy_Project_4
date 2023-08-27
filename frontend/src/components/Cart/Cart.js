import React,{useState,useEffect,useContext} from 'react'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { tokenContext } from '../../App'
import { toHaveAttribute } from '@testing-library/jest-dom/matchers'
const Cart = () => {
    const [cartList, setCartList] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const {token,userName} =useContext(tokenContext)
    const [deletedItem, setDeletedItem] = useState("")
    const [deleteErrorMessage, setDeleteErrorMessage] = useState("")
    const [totalPrice, setTotalPrice] = useState(0)
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:5000/cart/",{headers:{Authorization:`Bearer ${token}`}})
    .then((response)=>{
        setCartList(response.data.products);
        console.log(response.data.products);
        const totalcart =  response.data.products.reduce(function (accumulator, element, index) {
            // return an expression that would modify the accumulator
            return accumulator + element.productId.price;
            // you can specify the starting value of the accumulator
          }, 0);
        console.log(totalcart);
        setTotalPrice(totalcart)
    })
    .catch((err)=>{
        setErrorMessage(err.message)
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
                console.log(prod);
                return(<div className='cartproductcard'>
                    <img src={prod.productId.img} className='productimg' />
                    <div className='productid'>{prod.productId.name}</div>
                    <div className='productprice'>
                        {/* {setTotalPrice(totalPrice+prod.productId.price)} */}
                        {prod.productId.price}
                        </div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/IPA_Unicode_0x0078.svg/1200px-IPA_Unicode_0x0078.svg.png' className='deleteproduct' onClick={()=>{
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
                    }}/>

                    <br/>
                    
                    
                </div>)
            })}
            <>total price : {totalPrice}</>
        </div>
        </>:<>{errorMessage}</>}
    </div>
  )
}

export default Cart
import React,{useState,useEffect,useContext} from 'react'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { tokenContext } from '../../App'
import { toHaveAttribute } from '@testing-library/jest-dom/matchers'
const Cart = () => {
    const [cartList, setCartList] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const {token,userName,setToken} =useContext(tokenContext)
    const [deletedItem, setDeletedItem] = useState("")
    const [deleteErrorMessage, setDeleteErrorMessage] = useState("")
    const [totalPrice, setTotalPrice] = useState(0)
  const navigate = useNavigate()
  const totalcartfunction = (thecart)=>{
    console.log(thecart);
    const totalcart =  thecart.reduce(function (accumulator, element, index) {
        // return an expression that would modify the accumulator
        return (Math.ceil((accumulator + element.productId.price)*100))/100;
        // you can specify the starting value of the accumulator
      }, 0);
    // console.log(totalcart);
    setTotalPrice(totalcart)
  }


  useEffect(()=>{
    axios.get("http://localhost:5000/cart/",{headers:{Authorization:`Bearer ${token}`}})
    .then((response)=>{
        setCartList(response.data.products);
        // console.log(response.data.products);
        totalcartfunction(response.data.products)
    })
    .catch((err)=>{
        setErrorMessage(err.message)
    })
  },[])
    return (
    <div>
        <div className='navbarcart'>
        <div></div>
        <img src='https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg' className='homepagecart' onClick={()=>{
            navigate("/loggedin")
        }}/>
        <h1>Khalek Bdarak SuperMarket</h1>
        <div className='rightnavbar'>
        <h4 className='welcome'>Welcome {userName}</h4>
        <button className='logoutbuttoncart test' onClick={()=>{
            localStorage.clear()
            setToken(null)
            navigate("/")
        }}>LogOut</button>
        </div>
        <div></div>
        </div>
        <div>
            
        </div>
        {/* <br/><br/><br/><br/><br/><br/><br/> */}
        {cartList?<>
        <div className='cartcard'>
            {cartList.map((prod,i)=>{
                // console.log(prod);
                return(<div className='cartproductcard'>
                    <img className='productImg' src={prod.productId.img}/>
                <div className='productName'>{prod.productId.name}</div>
                <div className='productPrice'>{prod.productId.price} JD</div>
                
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/IPA_Unicode_0x0078.svg/1200px-IPA_Unicode_0x0078.svg.png' className='deleteproduct' onClick={()=>{
                        // console.log(prod.productId._id);
                        axios.delete(`http://localhost:5000/cart/${prod._id}`,{headers:{Authorization:`Bearer ${token}`}})
                        .then((response)=>{
                            const filtered = cartList.filter((elem,i)=>{
                                return elem._id !== prod._id
                            })
                            setCartList(filtered)
                            totalcartfunction(filtered)
                            // setCartList(cartList)
                        })
                        .catch((err)=>{
                            setDeleteErrorMessage("Something went Wrong please refresh your page")
                            console.log(err);
                        })
                    }}/>
                </div>)
            })}
            </div>
            <div className='price'>
                <div className='totalprice'>Total Price : {totalPrice} JD</div>
            <img src='https://m.media-amazon.com/images/I/51WfA1vXkmL.jpg' className='checkoutbutton' onClick={()=>{
                navigate("/payment")
            }}/>
            <div className='availablepaymentmethods'>
            <h5>Available Payment Methods</h5>
            <img src='https://i.ytimg.com/vi/i09C02151PI/maxresdefault.jpg' className='visa'/>
            </div>
            </div>
        </>:<>{errorMessage}</>}
    </div>
  )
}

export default Cart
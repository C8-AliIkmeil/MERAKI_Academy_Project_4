import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { tokenContext } from '../../App'
import "./Products.css"
const Products = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [img, setImg] = useState("")
    const [category, setCategory] = useState("")
    const [productList, setProductList] = useState("")
    // const [userId, setUserId] = useState("")
    const [productId, setProductId] = useState("")
    const {token}=useContext(tokenContext)
    const {setToken}=useContext(tokenContext)
    const {userId}=useContext(tokenContext)
    const {setUserId}=useContext(tokenContext)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        axios
        .get("http://localhost:5000/products/")
        .then((response)=>{
            console.log(response.data.products);
            setProductList(response.data.products)
        })
        .catch((err)=>{
            setErrorMessage("Error Happened")
            console.log(err);
        
        })
    },[])
    return (
    <div>
        <br/>
        <br/><br/><br/><br/><br/><br/>
        {productList?<>{productList.map((prod,i)=>{
            return(<div className='productcard'>
            <img className="prodimg"src={prod.img} />
            <img className='addtocart' src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=' onClick={()=>{
                if (!token){
                    navigate("/users/login")
                }else{
                    // setProductId(prod._id)
                    axios.post("http://localhost:5000/cart/",{userId,productId:prod._id})
                    .then((response)=>{
                        console.log(response.data);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
            }}/>
            <div key="nameprod"className='prodname'>{prod.name}</div>
            <div key="priceprod"className='prodprice'>{prod.price}</div>
            </div>)
        })}</>:<>{errorMessage}</>}
        
    </div>
  )
}

export default Products
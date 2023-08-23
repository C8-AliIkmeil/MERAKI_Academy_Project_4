import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { tokenContext } from '../../App'
const Products = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [img, setImg] = useState("")
    const [category, setCategory] = useState("")
    const [productList, setProductList] = useState("")
    const {token}=useContext(tokenContext)
    const {setToken}=useContext(tokenContext)
    const [errorMessage, setErrorMessage] = useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        axios
        .get("http://localhost:5000/products/",{headers:{Authorization:`Bearer ${token}`}})
        .then((response)=>{
            console.log(response.data.products);
            setProductList(response.data.products)
        })
        .catch((err)=>{
            setErrorMessage("Error Happened")
        
        })
    },[])
    return (
    <div>
        <br/>
        <br/><br/><br/><br/><br/><br/>
        {productList&&<>{productList.map((prod,i)=>{
            return(<div className='productcard'>
            <img src='' />
            <div key="nameprod"className='prodname'>{prod.name}</div>
            <div key="priceprod"className='prodprice'>{prod.price}</div>
            </div>)
        })}</>}
    </div>
  )
}

export default Products
import React,{useState,useEffect,useContext} from 'react'
import "./Addproducts.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Addproducts = () => {
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()
    return (
    <div>Addproducts
        <button onClick={()=>{
            navigate("/users/login")
        }} >Login</button>
        <input placeholder='Product Name' onChange={(e)=>{
            setName(e.target.value)
        }} />
        <input placeholder='Product Image link' onChange={(e)=>{
            setImg(e.target.value)
        }}/>
        <input placeholder='Product Price' onChange={(e)=>{
            setPrice(e.target.value)
        }}/>
        <input placeholder='Category Id' onChange={(e)=>{
            setCategory(e.target.value)
        }} />
        <button className='addproductbutton' onClick={()=>{
            axios.post("http://localhost:5000/products/",{name,img,price,category})
            .then((response)=>{
                setSuccessMessage(response.data.message)
                navigate("/loggedin")
            })
            .catch((err)=>{
                setErrorMessage(err.message)
                console.log(err);
            })
        }} >Add Product</button>
        {successMessage&&<div>Product Added Successfully</div>}
        {errorMessage&&<div>Error happened</div>}
    </div>
  )
}

export default Addproducts
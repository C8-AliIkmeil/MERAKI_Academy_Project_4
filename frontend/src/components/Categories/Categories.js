import React,{useState,useEffect,useContext} from 'react'
import "./Categories.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { tokenContext } from '../../App'

const Categories = () => {
  const [categoryList, setCategoryList] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [catego, setCatego] = useState("")
  const {token,productsCateg,setProductsCateg} = useContext(tokenContext)
  const navigate = useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:5000/categories/")
    .then((response)=>{
        setCategoryList(response.data.categories);
    })
    .catch((err)=>{
        setErrorMessage("Something went wrong kindly try again later")
    })
  })

    return (

    <div className='categoriespage'>
      
        {categoryList?<div className='categorycard'>
            {categoryList.map((categ,i)=>{
                return (<div className='categoryinfo'>
          <div class="container">
  <img src={categ.img} onClick={()=>{
                  axios.get(`http://localhost:5000/products/${categ._id}`)
                  .then((response)=>{
                    // setCatego(response.data.category)
                    // console.log(response.data);
                    setProductsCateg(response.data.categories)
                    navigate("/categorycomponent")
                  })
                  .catch((err)=>{
                    console.log(err.message);
                  })
                }} alt="Avatar" class="image" />
  <div class="middle">
    <div onClick={()=>{
                  axios.get(`http://localhost:5000/products/${categ._id}`)
                  .then((response)=>{
                    // setCatego(response.data.category)
                    // console.log(response.data);
                    setProductsCateg(response.data.categories)
                    navigate("/categorycomponent")
                  })
                  .catch((err)=>{
                    console.log(err.message);
                  })
                }} class="text">{categ.name}</div>
  </div>
</div>
                
                    <div>{categ.name}</div>
                </div>)
            })}
        </div>:<>{errorMessage}</>}
    </div>
  )

}

export default Categories
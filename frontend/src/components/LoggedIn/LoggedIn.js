import React,{useState,useEffect,useContext} from 'react'
import "./LoggedIn.css"
import { useNavigate } from 'react-router-dom'
import { tokenContext } from '../../App'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'
const LoggedIn = () => {
const {setToken,userName}=useContext(tokenContext)
const navigate = useNavigate()    

return (
    <div className='loggedin'><h1>Khalek Bdarak SuperMarket</h1>
        
        <div className='username'>Welcome {userName}
        <br/>
        <button className='logoutbutton' onClick={()=>{
            localStorage.clear()
            setToken(null)
            navigate("/")
}}>LogOut</button>
<button className="addporductsbutton"onClick={()=>{
            navigate("/addproduct")
        }}>Add Products</button>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tokyoship_Home_icon.svg/768px-Tokyoship_Home_icon.svg.png' className='homepagebutton' onClick={()=>{
        navigate("/loggedin")
        }}/>
        <img className='yourcart' src="https://cdnimg.webstaurantstore.com/images/products/large/446099/1740901.jpg" onClick={()=>{
            navigate("/cart")
        }}/>
        <Categories/>
        <Products/>
    </div>
  )
}

export default LoggedIn
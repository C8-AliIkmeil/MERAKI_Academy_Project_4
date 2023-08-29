import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./Search.css"
import Products from '../Products/Products'
const Search = () => {
    const [search, setSearch] = useState('')
    const [searchResuls, setSearchResuls] = useState("")
    const navigate = useNavigate()
    return (
    <div>
        <div className='navbar'>
        <img
        className="homepage"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tokyoship_Home_icon.svg/768px-Tokyoship_Home_icon.svg.png"
        onClick={() => navigate("/")}
      />
        <h1>Khalek Bdarak SuperMarket</h1>
        <button className="signupbutton" onClick={()=>{
            navigate("/users/register")
        }}>Sign Up</button>
        <button className='loginbutton' onClick={()=>{
            navigate('/users/login')
        }}>Login</button>
        </div>
    <input type='search' placeholder='Search' className='search' onChange={(e)=>{
      if (e.target.value !== "")
      {setSearch(e.target.value)
      setTimeout(()=>{axios.get(`http://localhost:5000/products/search/name?name=${search}`)
      .then((response)=>{
        console.log(response);
        setSearchResuls(response.data)
      })
      .catch((err)=>{
        console.log(err);
    })},0)}else{
        return (<div>
            <Products/>
            
        </div>)
      }
    }}/>
    
    {searchResuls ?<>
        <div className='searchCard'>
    {searchResuls.map((elem,i)=>{
      console.log(searchResuls);
      return (<div className='searchResults'>
        <img className='productimage' src={elem.img}/>
        <div>{elem.name}</div>
        <div>{elem.price}</div>

      </div>)
    })}
    </div></>:<div>
        <Products/>
        </div>}
    </div>
  )
}

export default Search
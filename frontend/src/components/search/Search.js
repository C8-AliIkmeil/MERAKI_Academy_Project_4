import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./Search.css"
import Products from '../Products/Products'
import { tokenContext } from '../../App'
const Search = () => {
    const [search, setSearch] = useState('')
    const [searchResuls, setSearchResuls] = useState("")
    const {token}=useContext(tokenContext)
    const navigate = useNavigate()
    return (
    <div className='s'>
        <div className='navbar'>
        <div></div>
        <img
        className="homepagesearch"
        src="https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg"
        onClick={() =>{
            if (token){
                navigate("/loggedin")
            }else{
                navigate("/")
            }
        }
        }
      />
        <h1>Khalek Bdarak SuperMarket</h1>
        <button className="signupbutton" onClick={()=>{
            navigate("/users/register")
        }}>Sign Up</button>
        <button className='loginbutton' onClick={()=>{
            navigate('/users/login')
        }}>Login</button>
        <div></div>
        </div>
        <br/><br/>
        <div className='searches'>
    <input type='search' placeholder='Search' className='search' onChange={(e)=>{
        if (e.target.value !== "")
        {setSearch(e.target.value)}
      else{
          return (<div>
            <Products/>
            
        </div>)
      }
    }}/>
    <br/><br/>
    <img src="https://logowik.com/content/uploads/images/search7780.jpg" className='searchh' onClick={()=>{
        setTimeout(()=>{axios.get(`http://localhost:5000/products/search/name?name=${search}`)
        .then((response)=>{
            console.log(response);
            setSearchResuls(response.data)
        })
        .catch((err)=>{
            console.log(err);
        })},0)
    }}/>
    </div>
        {/* search */}
    {/* </button> */}

    {search ?<>
        <div className='searchCard'>
    {searchResuls.map((elem,i)=>{
        console.log(searchResuls);
        return (<div className='searchResults'>
        <img className='productimage' src={elem.img}/>
        <div>{elem.name}</div>
        <div>Price: {elem.price} JD</div>
      </div>)
    })}
    </div></>:<div>
        <Products/>
        </div>}
    </div>
  )
}

export default Search
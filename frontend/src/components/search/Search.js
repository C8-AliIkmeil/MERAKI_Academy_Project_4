import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./Search.css"
const Search = () => {
    const [search, setSearch] = useState('')
    const [searchResuls, setSearchResuls] = useState("")
    const navigate = useNavigate()
    return (
    <div><h1>Khalek Bdarak SuperMarket</h1>
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
      })},500)}else{
        setSearchResuls("")
      }
    }}/>
    {searchResuls &&<>{searchResuls.map((elem,i)=>{
      console.log(searchResuls);
      return (<>{elem.name}</>)
    })}</>}
    <button className="signupbutton" onClick={()=>{
        navigate("/users/register")
    }}>Sign Up</button>
    <button className='loginbutton' onClick={()=>{
        navigate('/users/login')
    }}>Login</button></div>
  )
}

export default Search
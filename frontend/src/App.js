
import "./App.css";
import {Route,Routes,Link,Navigate} from "react-router-dom"
import { useState,useEffect,createContext } from "react";
import Register from "./components/Register/Register";
import Home from "./components/HomePage/Home"
import Login from "./components/Login/Login";
import Backtologin from "./components/Backtologin/Backtologin";
import LoggedIn from "./components/LoggedIn/LoggedIn";
import Addproducts from "./components/Addproducts/Addproducts";
import Cart from "./components/Cart/Cart";
import Categorycomponent from "./components/CategoryComponent/Categorycomponent";
import Payment from "./components/Payment/Payment";
import Search from "./components/search/Search";
export const tokenContext =createContext()
function App() {
  const [token, setToken] = useState(localStorage.getItem("token")|| "")
  const [isLoggedIn, setIsLoggedIn] = useState("")
  const [userName, setUserName] = useState(localStorage.getItem("userName")|| "")
  const [userId, setUserId] = useState(localStorage.getItem("userId")|| "")
  const [productsCateg, setProductsCateg] = useState("")
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState("")
  return (
    <tokenContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn,userName,setUserName,userId,setUserId,productsCateg,setProductsCateg,search,setSearch}}>

    <div className="App">
      <Routes>
        <Route path="/search" element={<Search/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/categorycomponent" element={<Categorycomponent/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/addproduct" element={<Addproducts/>}/>
        <Route path="/backtologin" element={<Backtologin/>}/>
        <Route path="/loggedin" element={<LoggedIn/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/users/register" element={<Register/>}/>
      <Route path="users/login" element={<Login/>}/>
      </Routes>
    </div>
    </tokenContext.Provider>
  );
}

export default App;

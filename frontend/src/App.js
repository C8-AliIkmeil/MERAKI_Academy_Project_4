
import "./App.css";
import {Route,Routes,Link,Navigate} from "react-router-dom"
import { useState,useEffect,createContext } from "react";
import Register from "./components/Register/Register";
import Home from "./components/HomePage/Home"
import Login from "./components/Login/Login";
import Backtologin from "./components/Backtologin/Backtologin";
import LoggedIn from "./components/LoggedIn/LoggedIn";
export const tokenContext =createContext()
function App() {
  const [token, setToken] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState("")
  
  return (
    <tokenContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn}}>

    <div className="App">
      <Routes>
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

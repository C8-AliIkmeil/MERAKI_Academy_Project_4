
import "./App.css";
import {Route,Routes,Link,Navigate} from "react-router-dom"
import { useState,useEffect,createContext } from "react";
import Register from "./components/Register/Register";
export const tokenContext =createContext()
function App() {
  const [token, setToken] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState("")
  return (
    <tokenContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn}}>

    <div className="App">
      <h1>Khalek Bdarak SuperMarker</h1>
      <Routes>
      <Route path="/users/register" element={<Register/>}/>
      </Routes>
    </div>
    </tokenContext.Provider>
  );
}

export default App;

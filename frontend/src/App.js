
import "./App.css";
import {Route,Routes,Link,Navigate} from "react-router-dom"
import { useState,useEffect,createContext } from "react";
export const tokenContext =createContext()
function App() {
  const [token, setToken] = useState("")
  return (
    <tokenContext.Provider value={{token,setToken}}>

    <div className="App">
      <h1>Khalek Bdarak SuperMarker</h1>
      
      
      <Routes>
      
      </Routes>
    </div>
    </tokenContext.Provider>
  );
}

export default App;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";
import { tokenContext } from "../../App";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSucces, setLoginSucces] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setToken,setIsLoggedIn } = useContext(tokenContext);
  // const { setIsLoggedIn } = useContext(tokenContext);
  const { setUserName } = useContext(tokenContext);
  const { userName } = useContext(tokenContext);
  const {userId} = useContext(tokenContext)
  const {setUserId}=useContext(tokenContext)
  return (
    <div className="loginPage">
      <div className="navbarlogin">
      <div></div>
      <img
        className="icon"
        src="https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg"
        onClick={() => navigate("/")}
        />
        <h1 className="header">Khalek Bdarak SuperMarket</h1>
      <div className="registerbuttondiv">
        <div></div>
        mesh 3amel account 3ena? ekbes hoon
        <button
          className="registerbutton"
          onClick={() => {
            navigate("/users/register");
          }}
        >
          Sign Up
        </button>
        <div></div>
      </div>
      
        </div>
      <div className="belownavbar">
      <div className="leftside">
        <img src="https://mydoctorfinder.com/images/blogs/thumbnails/5-benefits-of-eating-green-leafy-vegetables-detail.jpg" className="leftsideimg"/>
      </div>
      <div className="centerside">
    
      <br />
      
      <div className="form">
      <br />
      <br />
    <br /> 
      <br />
    
      {/* <br /> */}
      {/* <br /> */}
      <br />
      <br />
      Login
      <div className="inputcontainer">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        />
        </div>
      {/* <br />
      <br /> */}
      <div className="inputcontainer">

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        />
        </div>
      {/* <br />
      <br /> */}
      <div className="buttoncontainer">

      <button
        className="loginButtonlogin"
        onClick={() => {
          axios
          .post("http://localhost:5000/users/login", { email, password })
          .then((response) => {
            // console.log(response.data);
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            navigate("/loggedin");
            setUserName(response.data.userName);
            localStorage.setItem("userName",response.data.userName)
            setUserId(response.data.userId)
            localStorage.setItem("userId",response.data.userId)
          })
          .catch((err) => {
            setErrorMessage(err.message);
            console.log(err);
          });
        }}
        >
        Login
      </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
      
          </div>
        </div>
        <div className="rightside">
          <img src="https://www.premiofoods.com/content/uploads/2021/10/Health-Benefits-of-Meat-541x1024.png" className="rightsideimg"/>
        </div>
            </div>
      {/* <br></br> */}
      {errorMessage && <>Email or password that you entered is incorrect</>}
    </div>
  );
};

export default Login;

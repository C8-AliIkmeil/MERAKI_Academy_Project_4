import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "./Register.css";
import Backtologin from "../Backtologin/Backtologin";
import { Route, Router } from "react-router-dom";
const Register = (req, res) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className="register">
      <div className="navbarregister">
        <div></div>

        <img
          src="https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg"
          className="homebutton"
          onClick={() => {
            navigate("/");
          }}
        />
        <h1 className="header">Khalek Bdarak SuperMarket</h1>
        <div className="logingdevv">
          <h4>Already have account?</h4>
          <button
            className="loginbuttonregister"
            onClick={() => {
              navigate("/users/login");
            }}
          >
            Login
          </button>
        </div>

        <div></div>
      </div>

      <div className="bottomsection">
        <div></div>
        <div className="middlebottomsection">
          <h2>Make your Khalek Bdarak accout from here</h2>
          <h3>Kindly fill your information to make your account</h3>

          <input
          className="firstName inputregister"
            type="text"
            placeholder="First name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
          className="inputregister"
            type="text"
            placeholder="Last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <input
          className="inputregister"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
          className="inputregister"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            />
            {/* <br></br> */}
          
          <input
          className="inputregister"
            type="number"
            placeholder="Age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <input
          className="inputregister"
            type="text"
            placeholder="Location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <button
            className="addaccount"
            onClick={() => {
              axios
                .post("http://localhost:5000/users/register", {
                  firstName,
                  lastName,
                  email,
                  password,
                  age,
                  location,
                })
                .then((response) => {
                  setSuccessMessage(response.data.message);
                })
                .catch((err) => {
                  setErrorMessage("This email is already exist");
                });
            }}
          >
            Make account
          </button>
          {successMessage && <>{navigate("/backtologin")}</>}
          {errorMessage && <div>{errorMessage}</div>}
          {/* <h4>Already have accout?</h4>         */}
          {/* <button className='loginbuttonregister' onClick={()=>{
            navigate("/users/login")
        }}>Login</button> */}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import Products from "../Products/Products";
import { tokenContext } from "../../App";
const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResuls, setSearchResuls] = useState("");
  const { token, userName, setToken } = useContext(tokenContext);
  const navigate = useNavigate();

  //    useEffect(() => {

  //         setTimeout(()=>{axios.get(`http://localhost:5000/products/search/name?name=${search}`)
  //         .then((response)=>{
  //             console.log(response);
  //             setSearchResuls(response.data)
  //         })
  //         .catch((err)=>{
  //             console.log(err);
  //         })},0)

  //    }, [search])

  return (
    <div className="s">
      <div className="navbar">
        <div></div>
        <img
          className="homepagesearch"
          src="https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg"
          onClick={() => {
            if (token) {
              navigate("/loggedin");
            } else {
              navigate("/");
            }
          }}
        />
        <img
          className="yourcartsearch"
          src="https://cdnimg.webstaurantstore.com/images/products/large/446099/1740901.jpg"
          onClick={() => {
            navigate("/cart");
          }}
        />
        <h1>Khalek Bdarak SuperMarket</h1>
        {token ? (
          <>
            <br />
            {userName}
            <div className="logoutbuttonesearchbar">
              <div></div>
              <button
                className="logoutbuttonsearch"
                onClick={() => {
                  localStorage.clear();
                  setToken(null);
                  navigate("/");
                }}
              >
                LogOut
              </button>
              <div></div>
            </div>
          </>
        ) : (
          <>
            <button
              className="signupbutton"
              onClick={() => {
                navigate("/users/register");
              }}
            >
              Sign Up
            </button>
            <button
              className="loginbutton"
              onClick={() => {
                navigate("/users/login");
              }}
            >
              Login
            </button>
          </>
        )}

        <div></div>
      </div>
      <br />
      <br />
      <div className="searches">
        <input
          type="search"
          placeholder="Search"
          className="search"
          onChange={(e) => {
            setTimeout(() => {
              axios
                .get(
                  `http://localhost:5000/products/search/name?name=${e.target.value}`
                )
                .then((response) => {
                  console.log(response);
                  setSearchResuls(response.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }, 500);
            // setSearch(e.target.value);
          }}
        />
        <br />
        <br />
        
      </div>
      {/* search */}
      {/* </button> */}

      {searchResuls&& searchResuls.length> 0 ? (
        <>
          <div className="searchCard">
            {searchResuls &&
              searchResuls.map((elem, i) => {
                console.log(searchResuls);
                return (
                  <div className="searchResults">
                    <img className="productimage" src={elem.img} />
                    <div>{elem.name}</div>
                    <div>{elem.price}</div>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <div>
            no products
          {/* <Products /> */}
        </div>
      )}
    </div>
  );
};

export default Search;

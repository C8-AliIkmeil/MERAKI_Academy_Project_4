import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import Products from "../Products/Products";
import { tokenContext } from "../../App";
const Search = () => {
  const [search, setSearch] = useState("");
  const [searchResuls, setSearchResuls] = useState("");
  const { token, userName, setToken,userId,product,productsCateg } = useContext(tokenContext);
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
    <div className="Search">
      <div className="navbarsearch">
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
          src="https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
          onClick={() => {
            navigate("/cart");
          }}
        />
        <h1>Khalek Bdarak SuperMarket</h1>
        {token ? (
          <>
            {/* <br /> */}
            <div className="logoutbuttonesearchbar">
              {/* <div></div> */}
            <div className="welcomemessage">
                Welcome {userName}
                </div>
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
              {/* <div></div> */}
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
                // console.log(searchResuls);
                return (
                  <div className="searchResults">
                    <img className="productimage" src={elem.img} />
                    <div>{elem.name}</div>
                    <div>{elem.price} JD</div>
                    <img className='addtocart3' src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=' onClick={()=>{
                if (!token){
                    navigate("/users/login")
                }else{
                    // setProductId(prod._id)
                    axios.post("http://localhost:5000/cart/",{userId,productId:elem._id})
                    .then((response)=>{ 
                        // console.log(response.data);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }
            }}/>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <div>
            Type the product name to search for it
          {/* <Products /> */}
        </div>
      )}
    </div>
  );
};

export default Search;

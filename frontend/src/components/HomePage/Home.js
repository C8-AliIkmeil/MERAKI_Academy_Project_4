import React, { useContext } from 'react'
import "./Home.css"
import { useState,useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Categories from '../Categories/Categories'
import Products from '../Products/Products'
import axios from 'axios'
import { tokenContext } from '../../App'
import {FcSearch} from "react-icons/fc"
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Home = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    return (
    
    <div className='Home'>
        {/* <div className='navBarrows'> */}
        {/* <div></div> */}
        <div className="navBar">
          <div></div>
      <img src="https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg" className="logo"/>
      <h1>Khalek Bdarak SuperMarket</h1>

        {/* <img className='searchButton' src='https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg' onClick={()=>{
          navigate("/search")
        }}/> */}
        <FcSearch className='searchButton' onClick={()=>{
          navigate("/search")
        }}/>
        <div className='loginbox'>
        <button className="signupbutton" onClick={()=>{
          navigate("/users/register")
        }}>Sign Up</button>
        <button className='loginbutton' onClick={()=>{
          navigate('/users/login')
        }}>Login</button>
        </div>
        <div></div>
        </div>
        {/* <div></div> */}
        {/* </div> */}
        <div className='categories'>
        
        <Categories className="gg" />
        {/* <div>

        <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div> */}
        <div className='contactus'>
        Contact us : 0797107737
        </div>
        </div>
        {/* <Products/> */}
    </div>
  )
}

export default Home
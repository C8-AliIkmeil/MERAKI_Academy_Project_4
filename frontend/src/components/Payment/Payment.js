import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Payment.css"
import axios from 'axios'
import { tokenContext } from '../../App'


const Payment = () => {
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [ccv, setCcv] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
    const {token,setToken,userName} = useContext(tokenContext)
const navigate = useNavigate()
    return (
    <div>
        <div className='navbarpayment'>
        <div></div>
        <img src='https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg' className='homepagebutton' onClick={()=>{
            if (token){navigate("/loggedin")}else{navigate("/")}
        }}/>
        <h1>Khalek Bdarak SuperMarket</h1>
        <div className='navbarpaymentright'>
        <div>Welcome {userName}</div>
        <button className='logoutbuttonloggedin test' onClick={()=>{
            localStorage.clear()
            setToken(null)
            navigate("/")
        }}>LogOut</button>
        <div></div>
        </div>
        </div>

        <div className='paymentcard'>
        <input className='cardnumber' placeholder='Card Number' onChange={(e)=>{
            setCardNumber(e.target.value)
        }}/>
        <input className='expirationdate' placeholder='Expiration Date' onChange={(e)=>{
                setExpirationDate(e.target.value)
        }}/>
        <input className='ccv' placeholder='CCV' onChange={(e)=>{
                setCcv(e.target.value)
        }}/>
        <input className='firstname' placeholder='First Name' onChange={(e)=>{
                setFirstName(e.target.value)
        }}/>
        <input className='lastname' placeholder='Last Name' onChange={(e)=>{
                setLastName(e.target.value)
        }}/>
        <button className='Pay'>Pay</button>
        </div>
        </div>
  )
}

export default Payment
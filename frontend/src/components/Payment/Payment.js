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
    const {token} = useContext(tokenContext)
const navigate = useNavigate()
    return (
    <div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tokyoship_Home_icon.svg/768px-Tokyoship_Home_icon.svg.png' className='homepagebutton' onClick={()=>{
        if (token){navigate("/loggedin")}else{navigate("/")}
        }}/>
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
        </div>
        <button className='Pay'>Pay</button>
        </div>
  )
}

export default Payment
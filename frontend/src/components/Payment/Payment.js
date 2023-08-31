import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Payment.css"
import axios from 'axios'
import { tokenContext } from '../../App'
// import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [ccv, setCcv] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
    const {token,setToken,userName} = useContext(tokenContext)
const navigate = useNavigate()
    return (
    <div className='paymentpage'>
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
        <div className='cardss'>

        <MDBContainer fluid className="py-5 gradient-custom">
      <MDBRow className="d-flex justify-content-center py-5">
        <MDBCol md="7" lg="5" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-4">
              <MDBRow className="d-flex align-items-center">
                <MDBCol size="9">
                  <MDBInput
                    label="Card Number"
                    id="form1"
                    type="text"
                    placeholder="1234 5678 9012 3457"
                    />
                </MDBCol>
                <MDBCol size="3">
                  <img
                    src="https://img.icons8.com/color/48/000000/visa.png"
                    alt="visa"
                    width="64px"
                    />
                </MDBCol>

                <MDBCol size="9">
                  <MDBInput
                    label="Cardholder's Name"
                    id="form2"
                    type="text"
                    placeholder="Cardholder's Name"
                  />
                </MDBCol>

                <MDBCol size="6">
                  <MDBInput
                    label="Expiration"
                    id="form2"
                    type="text"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="CVV"
                    id="form2"
                    type="text"
                    placeholder="&#9679;&#9679;&#9679;"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBBtn color="info" rounded size="lg">
                    <MDBIcon fas icon="arrow-right" />
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
        {/* <div className='paymentcard'>
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
        </div> */}
        </div>
  )
}

export default Payment
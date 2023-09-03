import React,{useState,useContext,useEffect} from 'react'
import "./Paymentsuccess.css"
import { useNavigate } from 'react-router-dom';
import { tokenContext } from '../../App';

const Paymentsuccess = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSucces, setLoginSucces] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { setToken, token,setIsLoggedIn } = useContext(tokenContext);
    // const { setIsLoggedIn } = useContext(tokenContext);
    const {setUsername} = useContext(tokenContext)
    const { userName } = useContext(tokenContext);
    const {userId} = useContext(tokenContext)
    const {setUserId}=useContext(tokenContext)
    return (
    <div>
        <div className='navbarpayment'>
        <div></div>
        <img src='https://scalebranding.com/wp-content/uploads/2021/07/Supermarket-E-Logo.jpg' className='homepagebutton' onClick={()=>{
            if (token){navigate("/loggedin")}else{navigate("/")}
        }}/>
        <h1 className='header'>Khalek Bdarak SuperMarket</h1>
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
        <div className='middleee'>
            <div></div>
            <h1>Payment Successfully :D</h1>
            <h1>    Kindly wait your ordred within an hour.</h1>
            <h1>Thank you for using our Khalek Bdarak website.</h1>
            <div></div>
        </div>
    </div>
  )
}

export default Paymentsuccess
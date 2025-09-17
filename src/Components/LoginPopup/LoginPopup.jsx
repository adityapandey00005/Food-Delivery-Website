import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

function LoginPopup({setshowLogin}) {
    const [currState,setcurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
              {currState==="Login"?<></>: <input type="text" placeholder='Your name' required />}
              <input type="email" placeholder='Your email' required/>
              <input type="password" placeholder='password' required />

            </div>
            <button>{currState==="sign-Up"?"create account":"Login"}</button>
            <div className="login-popup-condition">
              <input type="checkbox" required/>
              <p>By continuing i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
            ? <p>create new account? <span onClick={()=>setcurrState("sign-Up")}>Click here</span></p>
            :  <p>Already have an account? < span onClick={()=>setcurrState("Login")}>Login here</span></p>
}
        </form>
      
    </div>
  )
}

export default LoginPopup

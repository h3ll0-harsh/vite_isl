import React from 'react'
import AccountIMG from "../../assets/Account.png";
import './auth.css'
// import GoogleIcon from '@mui/icons-material/Google';
export default function Account() {
  return (
    <div className='account'>
        <h1>Account</h1>
        <img src={AccountIMG}></img>
        <div className='account1'>    
            <a className='a2' href='#'>
                {/* <GoogleIcon fontSize="medium" /> */}
            <p>Signup with Google</p></a>
        </div>
        <div className='account2'>
            <a href='/auth/login'>Login with Credential</a>
        </div>
        <div className='account3'>
            <a href='/auth/registration'>Registration with email</a>
        </div>
      
      
    </div>
  )
}

import React from 'react'
import './auth.css'
export default function Login() {
  return (
    <div>
      <h1 className="text_speech">Login </h1>
            <form className='reg_form'>
              <input type="text" className="input_text" placeholder="Enter username here.."/>
              <input type="text" className="input_text" placeholder="Enter password here.."/>
              <button type='submit'>Submit</button>
              <a href='/auth/registration'>Create an account?</a>
            </form> 
    </div>
  )
}

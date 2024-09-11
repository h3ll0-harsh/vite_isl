import React from 'react'
import './auth.css'
export default function Registeration() {
  return (
    <div>
            <h1 className="text_speech">Registration </h1>
            <form className='reg_form'>
              <input type="text" className="input_text" placeholder="Enter username here.."/>
              <input type="text" className="input_text" placeholder="Enter password here.."/>
              <button type='submit'>Submit</button>
              <a href='/auth/login'>Already have account?</a>
            </form>
            
        </div>
  )
}

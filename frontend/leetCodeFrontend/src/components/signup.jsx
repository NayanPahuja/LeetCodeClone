import React from "react";
import { useState } from 'react'
import axios from 'axios'
import './signup.css'

const SignUp = () => {
  const [userEmail, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <div>
      <h1>SignUp Page</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userEmailID">Username:</label>
          <input type="text" id='userEmailID' value={userEmail} onChange={e => setUserEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="userPassID">Password:</label>
          <input type="text" id='userPassID' value={password} onChange={e => setUserPassword(e.target.value)} />
        </div>
        <button type="submit">SignUp</button>
      </form>
    </div>
  )
}

export default SignUp
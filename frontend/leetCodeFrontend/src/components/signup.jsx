import React from "react";
import { useState } from 'react'
import './signup.css'
import NavBar from "./navbar";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [userEmail, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <div>

    <NavBar/>
    <div id="login-container"> 
      <h1 class = 'login-text'>Register Your Account</h1>
      <p class = 'login-intro'><span>Please Register Your Account!</span></p>
      <form action="#" method="#" class="form login">
<div class="form__field">
<input id="login__username" type="text" value={userEmail} onChange={e => setUserEmail(e.target.value)} name="username" class="form__input" placeholder="Email" required/>
</div>
<div class="form__field">
<input id="login__password" type="password" value={password} onChange={e => setUserPassword(e.target.value)} name="password" class="form__input" placeholder="Password" required/>
</div>
<div class="form__field">
<input type="submit" value="Register"/>
</div>
<Link className = 'links' to={`/login`}>
<p class="text--center">Already a member? <a href="#" class = "link">Login</a></p>
</Link>
</form>
    </div>
    </div>
  )
}

export default SignUp
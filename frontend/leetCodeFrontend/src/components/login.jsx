import React from "react";
import { useState } from 'react'
import './login.css'

const Login = () => {
  const [userEmail, setUserEmail] = useState('')
  const [password, setUserPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };
  return (
    <div id="login-container"> 
      <h1 class = 'login-text'>Login into your account</h1>
      <p class = 'login-intro'><span>Please log into your account to start solving!</span></p>
      <form action="#" method="#" class="form login">
<div class="form__field">
<input id="login__username" type="text" value={userEmail} onChange={e => setUserEmail(e.target.value)} name="username" class="form__input" placeholder="Email" required/>
</div>
<div class="form__field">
<input id="login__password" type="password" value={password} onChange={e => setUserPassword(e.target.value)} name="password" class="form__input" placeholder="Password" required/>
</div>
<div class="form__field">
<input type="submit" value="Log into your account"/>
</div>
<p class="text--center">Not a member? <a href="#" class = "link">Sign up now</a></p>

</form>
    </div>
  )
}


export default Login

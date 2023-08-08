import React from "react";
import { useState } from 'react'
import './login.css'
import { MdOutlineEmail } from 'react-icons/fa';

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
<label for="login__username"><span class="hidden">Email</span></label>
<input id="login__username" type="text" name="username" class="form__input" placeholder="Email" required/>
</div>
<div class="form__field">
<label for="login__password"><span class="hidden">Password</span></label>
<input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required/>
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

import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import { useNavigate } from 'react-router-dom';
import {backendUrl} from "../../constants.js";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the history object

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Submitting:', email, password);

    const response = await fetch(`${backendUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const json = await response.json();
    console.log('Response:', json);

    if (response.ok && json.token) {
      localStorage.setItem('token', json.token);
      navigate('/dashboard') // Navigate to dashboard on successful login
    }
  };

  return (
    <div>
      <NavBar />
      <div id="login-container">
        <h1 className="login-text">Login into your account</h1>
        <p className="login-intro">
          <span>Please log into your account to start solving!</span>
        </p>
        <div className="form login">
          <div className="form__field">
            <input
              id="login__username"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="username"
              className="form__input"
              placeholder="Email"
              required
            />
          </div>
          <div className="form__field">
            <input
              id="login__password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form__input"
              placeholder="Password"
              required
            />
          </div>
          <div className="form__field">
            <input
              type="submit"
              onClick={handleSubmit}
              value="Log into your account"
            />
          </div>
          <Link className="links" to="/signup">
            <p className="text--center">
              Not a member? <a href="#" className="link">Sign up now</a>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

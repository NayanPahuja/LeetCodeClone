import React, { useState } from 'react';
import './signup.css';
import NavBar from './navbar';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Submitting:', email, password);

    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Make sure to set the Content-Type header
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const json = await response.json();
    if (json.msg === "Email already exists") {
      alert('Email Already Exists')
    }
    else if(json.msg === "Success"){
      navigate('/login')
    }
    console.log('Response:', json);
  };

  return (
    <div>
      <NavBar />
      <div id="login-container">
        <h1 className="login-text">Register Your Account</h1>
        <p className="login-intro">
          <span>Please Register Your Account!</span>
        </p>
        <div className="form login">
          <div className="form__field">
            <input
              id="login__username"
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              value="Register"
            />
          </div>
          <Link className="links" to="/login">
            <p className="text--center">
              Already a member?{' '}
              <a href="#" className="link">
                Login
              </a>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

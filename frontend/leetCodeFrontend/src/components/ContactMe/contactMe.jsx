import React from 'react';
import NavBar from '../navbar';
import "./ContactMe.css"
const ContactMe = () => {
  return (
    <div>
        <NavBar/>
    
    <div className='contact-container'>
        
      <h1>Contact Me</h1>
      <p>If you have any questions or feedback, feel free to contact me.</p>
      <div className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="4"></textarea>
        <button>Submit</button>
      </div>
    </div>
    </div>
  );
};

export default ContactMe;

import React from 'react';
import BannerImage from '../assets/banner.png';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Please Contact Us...</h1>
        <form>
          <label>Name&Surname</label>
          <input
            type="text"
            name="name"
            placeholder="Please enter your name..."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Please enter your email..."
          />
          <label>Your Message</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Please enter your message"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">Weekly</div>
        <div className="empty"></div>
        <div className="reg-sign">
          <div className="registration">Registration</div>
          <div className="sign-in">Sign-in</div>
        </div>
      </div>
    </div>
  )
}

export default Header;
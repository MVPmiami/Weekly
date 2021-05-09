import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import {toggleRegisterWindow} from './../toggleWindows'

const Header = (store) => {
  return (
    <div>
      <div className="header">
        <div className="logo">Weekly</div>
        <div className="empty">
        </div>
        <div className="reg-sign">
          <div  className="registration" onClick={toggleRegisterWindow}>Registration</div>
          <div className="sign-in">Sign-in</div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  (store) => (store)
)(Header);
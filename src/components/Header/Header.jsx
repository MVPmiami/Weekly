import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import {toggleRegisterWindow} from '../supFunctions/toggleWindows'

const Header = (store) => {
  const register = true;
  const sighIn = false;
  return (
    <div>
      <div className="header">
        <div className="logo">Weekly</div>
        <div className="empty">
        </div>
        <div className="reg-sign">
          <div  className="registration" onClick={() => {toggleRegisterWindow(register)}}>Registration</div>
          <div className="sign-in" onClick={() => {toggleRegisterWindow(sighIn)}}>{store.loginName}</div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  (store) => (store.setLoginNameReducer)
)(Header);
import './register.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {toggleRegisterWindow} from '../supFunctions/toggleWindows'
import {addAccountDataToDataBase} from './addAccountDataToDataBase'
import {toggleRegisterSuccesfulWindow} from '../supFunctions/toggleWindows'

function Register(store) {
  const register = true;
  const setAccountData = () => {
    let userName = document.getElementById('username-register').value;
    let password = document.getElementById('password-register').value;
    addAccountDataToDataBase(userName, password);
    toggleRegisterWindow(register);
    toggleRegisterSuccesfulWindow();
  }


  return (
      <div>
        <div id="wrapper-register" className='hidden'>
        <a onClick={() => {toggleRegisterWindow(register)}}>X</a>
	        <form id="register">
		        <input type="text" id='username-register' placeholder="username" />
		        <input type="password" id='password-register' placeholder="password" />
		        <div className='submit' onClick={setAccountData}>&#xf0da;</div>
	        </form>
        </div>
      </div>
  )
}

export default connect(
  (store) => (store.setAccountDataReducer)
)(Register);
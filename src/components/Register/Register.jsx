import './register.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {toggleRegisterWindow} from './../toggleWindows'
import {addAccountDataToDataBase} from './addAccountDataToDataBase'
import {toggleRegisterSuccesfulWindow} from './../toggleWindows'

function Register(store) {
  const setAccountData = () => {
    let userName = document.getElementById('username-register').value;
    let password = document.getElementById('password-register').value;
    store.dispatch({type: 'SET_ACCOUNT_DATA', userName: userName, password: password});
    addAccountDataToDataBase(userName, password);
    toggleRegisterWindow();
    toggleRegisterSuccesfulWindow();
  }


  return (
      <div>
        <div id="wrapper-register" className='hidden'>
        <a onClick={toggleRegisterWindow}>X</a>
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
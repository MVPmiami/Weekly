import './sign-in.css'
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {toggleRegisterWindow} from '../supFunctions/toggleWindows';
import {checkData} from './checkAccountData'

function SignIn(store) {
  const signIn = false
  const checkAccountData = () => {
    let userName = document.getElementById('username-sign-in').value;
    let password = document.getElementById('password-sign-in').value;
    checkData(userName,password,store);
  }


  return (
      <div>
        <div id="wrapper-sign-in" className='hidden'>
        <a onClick={() => {toggleRegisterWindow(signIn)}}>X</a>
	        <form id="sign-in">
		        <input type="text" id='username-sign-in' placeholder="username" />
		        <input type="password" id='password-sign-in' placeholder="password" />
		        <div className='submit' onClick={checkAccountData}>&#xf0da;</div>
	        </form>
          <p id="wrong-message" className="hidden">Wrong login or password! Try again.</p>
        </div>
      </div>
  )
}

export default connect(
  (store) => (store.setAccountDataReducer)
)(SignIn);
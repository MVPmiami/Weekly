import './register.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {toggleRegisterWindow} from './../toggleWindows'

function Register() {
  return (
      <div>
        <div id="wrapper-register" className='hidden'>
        <a onClick={toggleRegisterWindow}>X</a>
	        <form id="register" method="" action="" autocomplete="off">
		        <input type="text" id="user" name="user" placeholder="username" />
		        <input type="password" id="pass" name="pass" placeholder="password" />
		        <button type="submit">&#xf0da;</button>
	        </form>
        </div>
      </div>
  )
}

export default connect(
  (store) => (store)
)(Register);
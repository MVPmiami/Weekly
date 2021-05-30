import React from 'react';
import './content.css';
import Register from './../Register/Register'
import SignIn from './../Sign-in/Sign-in'
import RegisterSuccesful from './../Register/RegisterSuccessful'

const Content = () => {
  return (
    <div>
      <div className="content-wrap">
          <Register></Register>
          <SignIn></SignIn>
          <RegisterSuccesful></RegisterSuccesful>
      </div>
    </div>
  )
}

export default Content;
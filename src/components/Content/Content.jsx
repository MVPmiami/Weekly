import React from 'react';
import './content.css';
import Register from './../Register/Register'
import SignIn from './../Sign-in/Sign-in'
import RegisterSuccesful from './../Register/RegisterSuccessful'
import Card from './Card'

const Content = () => {
  return (
    <div>
      <div className="content-wrap">
          <Register></Register>
          <SignIn></SignIn>
          <RegisterSuccesful></RegisterSuccesful>
          <Card></Card>
      </div>
    </div>
  )
}

export default Content;
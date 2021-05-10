import React from 'react';
import './content.css';
import Register from './../Register/Register'
import RegisterSuccesful from './../Register/RegisterSuccessful'

const Content = () => {
  return (
    <div>
      <div className="content-wrap">
          <Register></Register>
          <RegisterSuccesful></RegisterSuccesful>
      </div>
    </div>
  )
}

export default Content;
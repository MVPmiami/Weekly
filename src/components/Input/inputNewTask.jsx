import React from 'react';
import './input.css';
import { connect } from 'react-redux';


const Input = (props) => {

  return (
      <input className='input' maxLength='30'></input>
  )
}

export default connect(
  (store) => (store)
)(Input);

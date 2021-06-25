import React from 'react';
import './input.css';
import { connect } from 'react-redux';


const Input = (props) => {

  const handleEnter = event => {
    if(event.key === 'Enter'){
      props.addTask();
    }
  }

  return (
      <input className='input' maxLength='30' onKeyPress={handleEnter} ></input>
  )
}

export default connect(
  (store) => (store)
)(Input);

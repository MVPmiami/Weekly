import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

function App(store) {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Content></Content>
      </div>
    </BrowserRouter>
  )
}

export default connect(
  (store) => (store)
)(App);

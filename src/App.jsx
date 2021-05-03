import './App.css';
import React, { useEffect } from 'react';
import { db } from './firebase'
import Header from './components/Header/Header'
function App() {
  return (
      <div>
            <Header></Header>
      </div>
  )
}

export default App;

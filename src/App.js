import React from 'react'
import {connect} from 'react-redux'
import Home from './pages/home'
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">    
      
      </header>
      <Home />
    </div>
  );
}
//router

 
export default connect() (App);


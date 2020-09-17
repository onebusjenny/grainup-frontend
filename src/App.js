import React from 'react'
import {connect} from 'react-redux'
import Home from './pages/home'
import { Router, Route } from 'react-router'
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">    
      <h1>Grain Up | Save Up</h1>
      <h3>start with planting a goal</h3>
      </header>
      <Home />
      
    </div>
    
   
  
  );
}
//router

 
export default connect() (App);


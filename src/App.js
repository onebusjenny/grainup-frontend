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
      {/* <Router>
        <div>
          <Route exact path ="/" component={home}/>
          <Route path="/showPlant" render={routerProps=> <showPlant {...routerProps} plants={this.states.plants}/>}/>
        </div>
      </Router> */}
    </div>
    
   
  
  );
}
//router

 
export default connect() (App);


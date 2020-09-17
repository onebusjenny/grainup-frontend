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
      <Router>
        <div>
          <Route exact path ="/" component={Home}/>
          <Route exact path='/plants' render={(...routerprops) => <showPlants plants={this.props.plants} />} />
          <Route exact path='/plants/new' render={(...routerprops) => <addPlantForm addPlant={this.props.addplant}/>}/>
          <Route path='/logs/:id' render={(...routerprops) => <showPlant plants={this.props.plants} />} />
        </div>
      </Router>
    </div>
    
   
  
  );
}
//router

 
export default connect() (App);


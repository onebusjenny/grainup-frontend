import React from 'react'
import {connect} from 'react-redux'
import Home from './pages/Home'
import plantContainer from './containers/plant_container'


function App() {
  return (
    <div className="App">
      <header className="App-header">    
      <h1>Grain Up | Save Up</h1>
      <h3>start with planting a goal</h3>
      </header>
      <plantContainer />
      <Home />
      
      

    </div>
    
   
  
  );
}
//router

 
export default connect() (App);


import React from 'react'
import {connect} from 'react-redux'
import Home from './pages/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {fetchPlants} from './store/actions'
import {fetchWaters} from './store/actions'
import addPlantForm from './forms/addPlantForm'
import addWaterForm from './forms/addWaterForm'
import Grainup_logo from './images/Grainup_logo.png'
import Deco1 from './images/Deco1.svg'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchPlants()
    this.props.fetchWaters()
}
  render(){
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="grain-up-logo-div">
      <img className="grain-up-logo" src={Grainup_logo} alt="logo" /> 
      </div>
      <div classname="title-div">
      <h1 className="title">Grain Up | Save Up</h1>
      </div>
     
      <Router>
        <div>
          <Route exact path ="/" component={Home}/>
          <Route exact path="/new" render={addPlantForm}/>
          <Route exact path="/:plant_id/waters/new" render={addWaterForm} />
          {/* <Route exact path='/plants' render={routerProps => <showPlants {...routerProps} plants={this.props.plants} />} />
          <Route path='/logs/:id' render={routerProps => <showPlant {...routerProps} plants={this.props.plants} />} /> */}
        </div>
      </Router>
      <br></br>
      <br></br>
      <div className="deco1-div">
      <img className="deco1" src={Deco1} alt="deco1" /> 
      </div>
    </div>
    );
  }
}
function mapStateToProps(){
  return {
  }
}

function mapDispatchToProps(dispatch){
  return {
      fetchPlants: () => {dispatch(fetchPlants())},
      fetchWaters: () => {dispatch(fetchWaters())}    
  }
}

 
export default connect(mapStateToProps,mapDispatchToProps) (App);


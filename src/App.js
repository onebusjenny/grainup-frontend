import React from 'react'
import {connect} from 'react-redux'
import Home from './pages/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {fetchPlants} from './store/actions'
import {fetchWaters} from './store/actions'
import addPlantForm from './forms/addPlantForm'
import addWaterForm from './forms/addWaterForm'



class App extends React.Component {

  componentDidMount(){
    this.props.fetchPlants()
    this.props.fetchWaters()
}
  render(){
  return (
    <div className="App">
      <header className="App-header">    
      <h1>Grain Up | Save Up</h1>
      </header>
      <Router>
        <div>
          <Route exact path ="/" component={Home}/>
          <Route exact path="/new" render={addPlantForm}/>
          <Route exact path="/:plant_id/waters/new" render={addWaterForm} />
          {/* <Route exact path='/plants' render={routerProps => <showPlants {...routerProps} plants={this.props.plants} />} />
          
          <Route path='/logs/:id' render={routerProps => <showPlant {...routerProps} plants={this.props.plants} />} /> */}
        </div>
      </Router>
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


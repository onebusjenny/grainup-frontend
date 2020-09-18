import React from 'react';
import {connect} from 'react-redux'
import {fetchPlants} from '../store/actions'
import {fetchWaters} from '../store/actions'
import {addPlant} from '../store/actions'
import {addWater} from '../store/actions'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '../pages/Home'


//import home.css

class plantContainer extends React.Component{

    componentDidMount(){
        this.props.fetchPlants()
    }

    
    render(){
       return (
        <Router>
        <div>
          <Route exact path ="/" component={Home}/>
          <Route exact path='/plants' render={routerProps => <showPlants {...routerProps} plants={this.props.plants} />} />
          <Route exact path='/plants/new' render={routerProps  => <addPlantForm {...routerProps} addPlant={addPlant}/>}/>
          <Route path='/logs/:id' render={routerProps => <showPlant {...routerProps} plants={this.props.plants} />} />
        </div>
      </Router>
       )
    }
}

function mapStateToProps(state){
    return {
        plants: state.plants,
        hasPlants: state.plants.length > 0

    }
}
function mapDispatchToProps(dispatch){
    return {
        fetchPlants: () => {dispatch(fetchPlants())},
        fetchWaters: () => {dispatch(fetchWaters())},
        addPlant: () => {dispatch(addPlant())},
        addWater: () => {dispatch(addWater())}
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (plantContainer)
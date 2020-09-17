import React, {Component} from 'react';
import {Connect} from 'react-redux'
import{Route} from 'react-router-dom'
import React from 'react'
import {connect} from 'react-redux'
import {fetchPlants} from '../store/actions'
//import home.css

class plantContainer extends React.Component{

    componentDidMount(){
        this.props.fetchPlants()
        console.log("hi")
    }

    // renderEmptyView(){
    //     return (
    //         <div>
    //             <p>this is the empty garden</p>
    //             <button>+</button>
    //         </div>
    //     )
    // }

    // renderPlantView(){
    //     const plant = this.props.plants[0]
    //     return(
    //         <div>
    //             <p>{plant.name}</p>
    //             <p>${plant.amount}</p>
    //             <p>garden with plants</p>
    //             <button>Water me</button>
    //         </div>
    //     )
    // }

    render(){
        <Router>
        <div>
          <Route exact path ="/" component={Home}/>
          <Route exact path='/plants' render={(...routerprops) => <showPlants plants={this.props.plants} />} />
          <Route exact path='/plants/new' render={(...routerprops) => <addPlantForm addPlant={this.props.addplant}/>}/>
          <Route path='/logs/:id' render={(...routerprops) => <showPlant plants={this.props.plants} />} />
        </div>
      </Router>
        
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

export default connect(mapStateToProps,mapDispatchToProps) (PlantContainer)
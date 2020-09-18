import React from 'react';
import {connect} from 'react-redux'
import {fetchPlants} from '../store/actions'
import {fetchWaters} from '../store/actions'
import {addPlant} from '../store/actions'
import {addWater} from '../store/actions'



//import home.css

class plantContainer extends React.Component{

    componentDidMount(){
        this.props.fetchPlants()
    }

    
    render(){
      return null
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
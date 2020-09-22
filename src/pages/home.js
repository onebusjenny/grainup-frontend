import React from 'react'
import {connect} from 'react-redux'
import {fetchPlants} from '../store/actions'
import {fetchWaters} from '../store/actions'
import SeedView from '../components/seedView'
import "./home.css" 
import HalfPlantView from '../components/halfPlantView';
import EmptyView from '../components/emptyView';
import FullPlantView from '../components/fullPlantView';


class Home extends React.Component{

    componentDidMount(){
        this.props.fetchPlants()
    }

    renderPlantView(){
        const {plant, hasWaters} = this.props
        if(hasWaters){
        if(plant.totalWater>=plant.amount){ 
            return <FullPlantView plant={plant} />   
        }
        else if(plant.totalWater>= (plant.amount/2)){
            return <HalfPlantView plant={plant} />
            }
        }
        return <SeedView plant={plant}/> 
    }

    // renderWaterView(){

    //     const water = this.props.waters
    //     return(
    //         <div>
    //             <p>{water.entry}</p>
    //             <p>plant with waters</p>

    //         </div>
    //     )
    // }

    
    render(){
        if(this.props.hasPlants){   
           return this.renderPlantView()   
                }
            return <EmptyView /> 
    }
}

function mapStateToProps(state){
        const hasWaters = state.waters.length > 0
        const totalWater = hasWaters ? state.waters.reduce((total,current_value)=>{
            return total+current_value.entry
        },0) :0
        const plant = {...state.plants[0],totalWater}
        
    return {
        // plants: state.plants,
        hasPlants: state.plants.length > 0,
        // waters: state.waters,
        plant: plant,
        hasWaters
    }
}
function mapDispatchToProps(dispatch){
    return {
        fetchPlants: () => {dispatch(fetchPlants())},
        fetchWaters: () => {dispatch(fetchWaters())},
        
    }
}




export default connect(mapStateToProps,mapDispatchToProps) (Home)
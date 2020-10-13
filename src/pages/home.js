import React from 'react'
import {connect} from 'react-redux'
import {fetchPlants} from '../store/actions'
import {fetchWaters} from '../store/actions'
import SeedView from '../components/seedView'
import "./home.css" 
import HalfPlantView from '../components/halfPlantView';
import EmptyView from '../components/emptyView';
import FullPlantView from '../components/fullPlantView';
import {Link} from 'react-router-dom';

class Home extends React.Component{

    componentDidMount(){
        this.props.fetchPlants()
    }

    renderPlantView(plant){
        
        if(plant.totalWater > 0){
        if(plant.totalWater>=plant.amount){ 
            return <FullPlantView plant={plant} />   
        }
        else if(plant.totalWater>= (plant.amount/2)){
            return <HalfPlantView plant={plant} />
            }
        }
            return <SeedView plant={plant}/> 
    }

    
    render(){
        if(this.props.hasPlants){   
           return <div className="fixed_plants">{this.props.allPlants.map(plant=>
               this.renderPlantView(plant))}
               <Link to ="/new"><button className="add-new-button" >+</button></Link> 
           </div> 
                }

            return <EmptyView /> 
    }
}

function mapStateToProps(state){
        const hasWaters = state.waters.length > 0;
        // const totalWater = hasWaters ? state.waters.reduce((total,current_value)=>{
        //     return total+current_value.entry
        // },0) :0
        // const plant = {...state.plants[0],totalWater}
        const allPlants =
            state.plants.map(plant => {
                const totalWater = state.waters.filter(water =>
                    water.plant_id === plant.id
                        ).reduce((total,current_value)=>{
                        return total+current_value.entry
                            },0);
                return {...plant, totalWater}
             });
        
    return {
        hasPlants: state.plants.length > 0,
        // plant: plant,
        hasWaters, allPlants
    };
};
function mapDispatchToProps(dispatch){
    return {
        fetchPlants: () => {dispatch(fetchPlants())},
        fetchWaters: () => {dispatch(fetchWaters())},
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (Home)
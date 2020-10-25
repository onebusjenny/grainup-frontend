import React from 'react'
import {Link} from 'react-router-dom';
import PlantInfo from './plantInfo'
import HalfPlant from '../images/HalfPlant.png'

export default class OnePlantView extends React.Component {


render(){
    const plant = this.props.p
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
}
function mapStateToProps(state,props){
    const plant_id = parseInt(props.match.params.plant_id,10);
    const plant = state.plants.find(plant=> plant.id === plant_id);
    const totalWater = state.waters.filter(water =>
        water.plant_id === plant.id
            ).reduce((total,current_value)=>{
            return total+current_value.entry
                },0)
            return {p:{...plant, totalWater}}
}

export default connect(mapStateToProps,mapDispatchToProps) (OnePlantView)
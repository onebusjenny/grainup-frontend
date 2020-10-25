
import React from 'react'
import {Link} from 'react-router-dom';
import PlantInfo from './plantInfo'
import {connect} from 'react-redux'
import {fetchPlants} from '../store/actions'
import {fetchWaters} from '../store/actions'


class AllPlantView extends React.Component {
    state ={
        count:0
    }

    addMe = () => {
        let newLike = this.state.likes +1
        this.setState({
            likes: newLike
        })
    }
    plantList = () => {
        return this.props.allPlants.map(plant =>
            <PlantInfo key={plant.id} plant={plant}/>
            
            )
    }

    render(){
        return(
            <div>
                <h1>Your Plants</h1>
                
                <ol>
                    <ul>
                    {this.plantList()}
                    </ul>
                    <Link to ="/new"><button className="add-new-button" >+</button></Link> 
                </ol>
                
            </div>
        )
    };

}

function mapStateToProps(state){
    const hasWaters = state.waters.length > 0;
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

export default connect(mapStateToProps,mapDispatchToProps) (AllPlantView)


   
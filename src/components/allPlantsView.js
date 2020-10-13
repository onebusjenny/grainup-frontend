import React from 'react'
import {Link} from 'react-router-dom';
import PlantInfo from './plantInfo'



class allPlantsView extends Component {
    allPlant =() => {
        return this.props.logs.plants.map(plant => 
            <PlantInfo key={plant.id} plant={plant} />
            )
    }

    render(){
        return(
            <div>
                <ol>
                {this.allPlant()}
                </ol>
            </div>
        )
    }
}

export default allPlantsView;

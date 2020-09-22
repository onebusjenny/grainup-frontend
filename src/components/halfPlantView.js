import React from 'react'
import {Link} from 'react-router-dom';
import PlantInfo from './plantInfo'
import HalfPlant from '../images/HalfPlant.png'

export default function HalfPlantView({plant}) {
    return(
        <div>
                < PlantInfo plant={plant} />
                <img className="halfplantview" src={HalfPlant} alt="halfplant" />
                <div className="fixed-water-me-div">
                <Link to ={`/${plant.id}/waters/new`} ><button className="water-me-button"></button></Link>
                </div>
            </div>
    )
}
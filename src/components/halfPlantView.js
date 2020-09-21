import React from 'react'
import {Link} from 'react-router-dom';
import PlantInfo from './plantInfo'
import HalfPlant from '../images/HalfPlant.png'

export default function HalfPlantView({plant}) {
    return(
        <div>
                < PlantInfo plant={plant} />
                <p>half plant</p>
                <img className="halfplantview" src={HalfPlant} alt="halfplant" />
                <Link to ={`/${plant.id}/waters/new`} ><button>water me</button></Link>
            </div>
    )
}
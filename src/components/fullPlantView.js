import React from 'react'
import PlantInfo from './plantInfo'
import FullPlant from '../images/FullPlant.png'

export default function FullPlantView({plant}) {
    return(
        <div>
        <br></br>
        <br></br>
        < PlantInfo plant={plant} />
        <p>full plant</p>
        <img className="fullplantview" src={FullPlant} alt="fullplant" />
    </div>
    )
}
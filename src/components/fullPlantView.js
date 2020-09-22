import React from 'react'
import PlantInfo from './plantInfo'
import FullPlant from '../images/FullPlant.png'

export default function FullPlantView({plant}) {
    return(
        <div>

        < PlantInfo plant={plant} />
        <img className="fullplantview" src={FullPlant} alt="fullplant" />
        
    </div>
    )
}
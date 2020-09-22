import React from 'react'
import {Link} from 'react-router-dom';
import PlantInfo from './plantInfo'
import GardenSeed from '../images/GardenSeed.svg'


export default function SeedView({plant}) {
    return(
        <div>
        <br></br>
        <br></br>
        < PlantInfo plant={plant} />
        <div className="fixed-water-me-div">
        <Link to ={`/${plant.id}/waters/new`}><button className="water-me-button"></button></Link>
        </div>
        <div className="seedview-div">
        <img className="seedview" src={GardenSeed} alt="seed" />
        </div>
    </div>
    )
}


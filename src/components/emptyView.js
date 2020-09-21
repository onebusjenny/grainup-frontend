import React from 'react'
import {Link} from 'react-router-dom';
import PlantInfo from './plantInfo'
import GardenSeed from '../images/GardenSeed.svg'

export default function SeedView() {
    return(
        <div>
        <br></br>
        <br></br>
        < PlantInfo plant={plant} />
        <Link to ={`/${plant.id}/waters/new`}><button>water me</button></Link>
        <div className="seedview-div">
        <img className="seedview" src={GardenSeed} alt="seed" />
        </div>
    </div>
    )
}
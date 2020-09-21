import React from 'react'




export default function PlantInfo({plant}) {
    return(
        <div>
       <div className="plant-info">
           <p className="plant-name">{plant.name}</p>
           <p>${plant.amount}</p>
           <p>{plant.date}</p>
           <br></br>
           <p>${plant.totalWater}</p>
       </div>
       </div>
    )
}

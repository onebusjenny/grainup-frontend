import React from 'react'
import Test from './test'

import Test2 from './test2'
import LikeButton from './likeButton'

export default function PlantInfo({plant}) {
    return(
        <div>
       <div className="plant-info">
           <h4>Your Goal</h4>
           <p className="plant-name">{plant.name}</p>
           <p>${plant.amount}</p>
           <p>{plant.date}</p>
           </div>
           <div className="your-plant-has-div">
           <h4>YOUR PLANT HAS:</h4>
           <h4>${plant.totalWater}</h4>
           </div>
           <div>
               <LikeButton />
           </div>
       {/* <Test />
    <Test2 /> */}
       </div>
    )
}

// <div className="your-plant-has-div"></div>
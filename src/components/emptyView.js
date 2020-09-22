import React from 'react'
import {Link} from 'react-router-dom';


export default function EmptyView() {
    return(
        <div className="emptyview">
                <p>Set a new goal</p>
              <Link to ="/new"><button className="add-new-button" >+</button></Link> 
            </div>
    )
}
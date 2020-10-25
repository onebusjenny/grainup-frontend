
import React from 'react'


export default class LikeButton extends React.Component {
    state ={
        counts:0
    }

    likeMe = () => {
        this.setState({
            counts: this.state.counts + 1
        })
    }

   

    render(){
        return(
            <div>
                <button onClick={this.likeMe}>Likes {this.state.counts}</button> 
                
            </div>
        )
    };

}


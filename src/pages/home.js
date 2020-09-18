import React from 'react'
import {connect} from 'react-redux'
import {fetchPlants} from '../store/actions'
import {fetchWaters} from '../store/actions'
import {Link} from 'react-router-dom';
import {addPlant} from '../store/actions'
import {addWater} from '../store/actions'



//import home.css

class Home extends React.Component{

    componentDidMount(){
        this.props.fetchPlants()
        console.log("hi")
    }

    renderEmptyView(){
        return (
            <div>
                <p>this is the empty garden</p>
              <Link to ="/new"><button>+</button></Link> 
            </div>
        )
    }

    renderSeedView(){
        return (
            <div>
                <p>seed</p>
                <img></img>
                <Link to ="/plant_id/waters/new"><button>water me</button></Link>
            </div>
        )
    }

    renderHalfPlantView(){
        const plant = this.props.plants[0]
        return (
            <div>
                
                <p>half plant</p>
                <img></img>
                <Link to ={`/${plant.id}/waters/new`} ><button>water me</button></Link>
            </div>
        )
    }

    renderFullPlantView(){
        return (
            <div>
                <p>full plant</p>
                <img></img>
            </div>
        )
    }


    renderPlantView(){
        const plant = this.props.plants[0]
        if(this.props.hasWaters){
        const totalWater = this.props.totalWater
        if(totalWater>=plant.amount){ 
            return this.renderFullPlantView();   
        }
        else if(totalWater>= (plant.amount/2)){
            return this.renderHalfPlantView();
        }
        }
        return this.renderSeedView()
         
        
        // return(
        //     <div>
        //         <p>{plant.name}</p>
        //         <p>${plant.amount}</p>
        //         <p>{plant.date}</p>
        //         <p>garden with plants</p>
        //         <button>Water me</button>
        //     </div>
        // )
    }

    renderWaterView(){
        const water = this.props.waters
        return(
            <div>
                <p>{water.entry}</p>
                <p>plant with waters</p>

            </div>
        )
    }

    
    render(){
        if(this.props.hasPlants){
           
           return( 
                this.renderPlantView()
                
                )}
            return (
                this.renderEmptyView() 
        )
        
    }
}
function mapStateToProps(state){
        const hasWaters = state.waters.length > 0

        const totalWater = hasWaters ? state.water.reduce((total,current_value)=>{
            return total+current_value
        }) :0
        

    return {
        plants: state.plants,
        hasPlants: state.plants.length > 0,
        waters: state.waters,
        hasWaters, 
        totalWater

    }
}
function mapDispatchToProps(dispatch){
    return {
        fetchPlants: () => {dispatch(fetchPlants())},
        fetchWaters: () => {dispatch(fetchWaters())},
        
    }
}




export default connect(mapStateToProps,mapDispatchToProps) (Home)
import React from 'react'
import {connect} from 'react-redux'
import {fetchPlants} from '../store/actions'
import {fetchWaters} from '../store/actions'
import {Link} from 'react-router-dom';
// import GardenSeed from '../images/GardenSeed.png'
import GardenSeed from '../images/GardenSeed.svg'
import "./home.css" 


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
                <br></br>
                <br></br>
                <div className="seedview-div">
                <img className="seedview" src={GardenSeed} alt="seed" />
                </div>
                 
                {this.renderPlantInfoView()}
                
                <Link to ="/plant_id/waters/new"><button>water me</button></Link>
            </div>
        )
    }

    renderHalfPlantView(){
        const plant = this.props.plants[0]
        return (
            <div>
                 {this.renderPlantInfoView()}
                <p>half plant</p>
               
                <Link to ={`/${plant.id}/waters/new`} ><button>water me</button></Link>
            </div>
        )
    }

    renderFullPlantView(){
        return (
            <div>
                 {this.renderPlantInfoView()}
                <p>full plant</p>
                
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
        
        
        
      
    }

    renderPlantInfoView(){
        const plant = this.props.plants[0]
          return(
            <div className="plant-info">
                <p className="plant-name">{plant.name}</p>
                <p>${plant.amount}</p>
                <p>{plant.date}</p>
                <br></br>
                <p>${this.props.totalWater}</p>
            </div>
        )
    }

    // renderWaterView(){

    //     const water = this.props.waters
    //     return(
    //         <div>
    //             <p>{water.entry}</p>
    //             <p>plant with waters</p>

    //         </div>
    //     )
    // }

    
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
        console.log(state)
        const totalWater = hasWaters ? state.waters.reduce((total,current_value)=>{
            return total+current_value.entry
        },0) :0
        console.log(totalWater)

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
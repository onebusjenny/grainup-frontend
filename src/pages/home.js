import React from 'react'
import {connect} from 'react-redux'
import {fetchPlants} from '../store/actions'
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
                <button>+</button>
            </div>
        )
    }

    renderPlantView(){
        const plant = this.props.plants[0]
        return(
            <div>
                <p>{plant.name}</p>
                <p>${plant.amount}</p>
                <p>garden with plants</p>
                <button>Water me</button>
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
    return {
        plants: state.plants,
        hasPlants: state.plants.length > 0

    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchPlants: () => {dispatch(fetchPlants())}
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Home)
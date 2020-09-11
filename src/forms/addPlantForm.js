class addPlantForm extends React.Component{
    render(){

    }
}

function mapDispatchToProps(dispatch){
    
    return {  
        newPlant: (e) => {e.preventDefault();dispatch(createPlant())}
        //use to call action
        
        // {this.props.newPlant()}
    }
}
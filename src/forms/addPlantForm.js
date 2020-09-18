import React, {Component} from 'react';
import { withRouter} from 'react-router-dom'
import {addPlant} from '../store/actions'
import {connect} from 'react-redux'

class addPlantForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            amount: '',
            date: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        console.log(this.state)
        event.preventDefault();
        this.props.addPlant(this.state)
        this.props.history.push('/')
        

    }


    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    Goal Name:
                    <input id="name" name="name" type= "text" onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Amount:
                    <input id="amount" name="amount" type="text" onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <label>
                    Date:
                    <input id="date" name="date" tyep="text" onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <button type="submit">Create your plant</button>
            </div>
        </form>
        )}
        
}
function mapStateToProps(){
    return {
    }
}

function mapDispatchToProps(dispatch){
    return {
        addPlant: (state) => {dispatch(addPlant(state.name,state.amount,state.date))}
          
    }
    }
    
export default withRouter(connect(mapStateToProps,mapDispatchToProps) (addPlantForm));

// function mapDispatchToProps(dispatch){
    
//     return {  
//         newPlant: (e) => {e.preventDefault();dispatch(createPlant())}
//         //use to call action
        
//         // {this.props.newPlant()}
//     }
// }
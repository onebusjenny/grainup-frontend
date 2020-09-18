import React, {Component} from 'react';
import { withRouter} from 'react-router-dom'
import {addWater} from '../store/actions'
import {connect} from 'react-redux'

class addWaterForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            entry: ''
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addWater(this.state)
        this.props.history.push('/plants')

    }


    render(){
        return(
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    Amount
                    <input id="entry" name="entry" type= "text" onChange={this.handleChange} value={this.state.entry}></input>
                </label>
            </div>
            <div>
                <button type="submit">Water it</button>
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
        addWater: (state) => {dispatch(addWater(state.entry))}
          
    }
    }
    
export default withRouter(connect(mapStateToProps,mapDispatchToProps) (addWaterForm));


// function mapDispatchToProps(dispatch){
    
//     return {  
//         newPlant: (e) => {e.preventDefault();dispatch(createPlant())}
//         //use to call action
        
//         // {this.props.newPlant()}
//     }
// }
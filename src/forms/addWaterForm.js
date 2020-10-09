import React, {Component} from 'react';
import { withRouter} from 'react-router-dom'
import {addWater} from '../store/actions'
import {connect} from 'react-redux'

class addWaterForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            entry: '',
            plant_id: parseInt(props.match.params.plant_id,10)
            //define by react router props.match.params
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
        this.props.history.push('/')

    }


    render(){
        return(
        <form className="addWaterForm" onSubmit={this.handleSubmit}>
            <div>
                <label>
                    
                    <br></br>
                    <input id="entry" name="entry" type= "text" placeholder="$ Amount" onChange={this.handleChange} value={this.state.entry}></input>
                </label>
            </div>
            <div>
                <br></br>
                <button className="water-form-button" type="submit">Water it</button>
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
        addWater: (state) => {dispatch(addWater(state.entry,state.plant_id))}
          
    }
}
    
export default withRouter(connect(mapStateToProps,mapDispatchToProps) (addWaterForm));


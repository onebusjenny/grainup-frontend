import React, {Component} from 'react';
import {addPlant} from '../store/actions'
import {connect} from 'react-redux'
import { withRouter} from 'react-router-dom'

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
        event.preventDefault();
        this.props.addPlant(this.state)
        this.props.history.push('/plants')
    }

    //js back function


    render(){
        return(
        <form className="addPlantForm" onSubmit={this.handleSubmit}>
            <div >
                <label >
                    <input required id="name" name="name" type= "text" placeholder="Goal name.." onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <label>
                  
                    <input required id="amount" name="amount" type="text" placeholder="$" onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <label>
                   
                    <input required id="date" name="date" type="text" placeholder="Today's date" onChange={this.handleChange} />
                </label>
            </div>
            <div>
                <br></br>
                
                <button className="plant-form-button" type="submit">Create your plant</button>
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

//do it without withRouter
//look at route props at route props
class addPlantForm extends React.Component{
    constructor(){
        super()
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

    }


    render(){
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    Goal Name:
                    <input id="goal_name" name="goal_name" type= "text" onChange={this.handleChange} value={this.state.name}></input>
                </label>
            </div>
            <div>
                <label>
                    Amount:
                    <input id="goal_amount" name="goal_amount" type="text" onChange={this.handleChange} value={this.state.amount}></input>
                </label>
            </div>
            <div>
                <label>
                    Date:
                    <input id="goal_date" name="goal_date" tyep="text" onChange={this.handleChange} value={this.state.date}></input>
                </label>
            </div>
            <div>
                <button type="submit">Create your plant</button>
            </div>
        </form>
    }
}

function mapDispatchToProps(dispatch){
    
    return {  
        newPlant: (e) => {e.preventDefault();dispatch(createPlant())}
        //use to call action
        
        // {this.props.newPlant()}
    }
}
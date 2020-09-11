const defaultState = {
    plants: [],
    waters: []
}


function reducers(state=defaultState, action){
    switch(action.type){
        case 'SET_PLANTS': 
        return Object.assign({},state,{plants:action.plants})
        
        default: return state
    }
}

export default reducers
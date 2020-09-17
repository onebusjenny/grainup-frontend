import uuid from 'uuid';

const defaultState = {
    plants: [],
    waters: []
}


function reducers(state=defaultState, action){
    switch(action.type){
        case 'SET_PLANTS': 
        return Object.assign({},state,{plants:action.plants})
        
        case 'ADD_PLANT':
            const plant = {
                name: action.plant.name,
                amount: action.plant.amount,
                date: action.plant.date
            }

        return {
            ...state,
            plants:[...state.plants, plant],
            loading:false
        }

        case 'ADD_WATER':
            const water = {
                id: uuid(),
                entry: action.water.entry,
            }

        return {
            ...state,
            waters:[...state.waters, water],
        }


        default: return state
    }
}

export default reducers
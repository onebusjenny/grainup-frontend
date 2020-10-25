
const defaultState = {
    plants: [],
    waters: [],
    loading: true
}

function reducers(state=defaultState, action){
    switch(action.type){
        case 'SET_PLANTS': 
        return Object.assign({},state,{plants:action.plants})
        case 'SET_WATERS': 
        return Object.assign({},state,{waters:action.waters})
        case 'ADD_PLANT':
            const plant = {
                name: action.plant.name,
                amount: action.plant.amount,
                date: action.plant.date,
                id: action.plant.id
            }
        return {
            ...state, 
            plants:[...state.plants, plant], 
        }


        case 'ADD_WATER':

        return {
            ...state,
            waters:[...state.waters, action.water],
        }


        default: return state
    }
}

export default reducers
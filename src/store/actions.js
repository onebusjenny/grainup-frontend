export function fetchPlants(){ 
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/plants')
        .then(res => 
            res.json()) 
        .then(res =>  dispatch({type:'SET_PLANTS',plants:res}) 

        )}
};

export function fetchWaters(){
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/waters')
        .then(res => 
            res.json()) 
        .then(res =>  dispatch({type:'SET_WATERS',waters:res}) 

        )}

};

export function addPlant(name,amount,date){
    return(dispatch) => {
        return fetch('http://localhost:3000/api/v1/plants',{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
                method: 'POST',
                body: JSON.stringify({plant: name,amount,date})
            })
              .then(response => response.json())
              .then(plant => dispatch({type: 'ADD_PLANT', plant: plant})
              )
    }
};

export function addWater(entry){
    return(dispatch) => {
        return fetch('http://localhost:3000/api/v1/waters',{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
                method: 'POST',
                body: JSON.stringify({water: entry})
            })
              .then(response => response.json())
              .then(water => dispatch({type: 'ADD_WATER', water: water})
              )
    }
};
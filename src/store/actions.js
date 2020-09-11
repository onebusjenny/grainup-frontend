
export function createPlant(){
   
};

export function fetchPlants(){ 
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/plants')
        .then(res => 
            res.json()) 
        .then(res =>  dispatch({type:'SET_PLANTS',plants:res}) 

        )}
};

export function fetchWaters(){

};

export function addWater(){

};


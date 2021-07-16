import axios from 'axios';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, 
// performs an axios call to retreive smurfs from our server, 
// saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

const fetchSmurfsConstants = {
    FETCH_REQUEST: 'FETCH_REQUEST',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',


    ADD_REQUEST: 'ADD_REQUEST',
    ADD_SUCCESS: 'ADD_SUCCESS',
    ADD_FAILURE: 'ADD_FAILURE',
}

function fetchSmurfs() {    
    return dispatch => {
        axios.get('http://localhost:3333/smurfs').then((res) => {
            if(res) {
                dispatch(success(res.data))
            }
        })
    };
    function success(data) {
        return {
            type: fetchSmurfsConstants.FETCH_SUCCESS,
            data
        }
    }
}

function addSmurf(name, nickname, position, summary) {    
    return dispatch => {
        
        axios.post('http://localhost:3333/smurfs', {
            name, nickname, position: position, description: summary
        }).then((res) => {            
            if(res) {
                dispatch(success(res.data))
            }
        }).catch(res => {            
            dispatch(failure(res))
        })
    };

    function success(data) {
        return {
            type: fetchSmurfsConstants.ADD_SUCCESS,
            data
        }
    }

    function failure(err) {        
        return {
            type: fetchSmurfsConstants.ADD_FAILURE,
            err
        }

    }
}

export const fetchSmurfsAction = {
    fetchSmurfs,
    addSmurf
}
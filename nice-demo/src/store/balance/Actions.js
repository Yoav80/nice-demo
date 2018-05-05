import axios from 'axios';
import { BALANCE_FETCHED, BALANCE_FETCH_ERROR } from './Reducer';

const apiUrl = 'http://localhost:8000/api/getbalance';

export function loadBalance() {
    return dispatch => {
        axios.get(apiUrl)
        .then(res => {
            dispatch({type: BALANCE_FETCHED, payload: res})
        })
        .catch(err => {
            dispatch({type: BALANCE_FETCH_ERROR, payload: err})
        })    
    }
}

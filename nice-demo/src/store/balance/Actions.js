import axios from 'axios';
import { BALANCE_FETCHED, BALANCE_FETCH_ERROR, BalanceUrl } from './actionTypes';

export default function loadBalance() {
    return dispatch => {
        axios.get(BalanceUrl)
        .then(res => {
            dispatch({type: BALANCE_FETCHED, payload: res.data});
        })
        .catch(err => {
            dispatch({type: BALANCE_FETCH_ERROR, payload: err});
        })    
    }
}

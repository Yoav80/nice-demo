import { BALANCE_FETCH_ERROR, BALANCE_FETCHED } from './actionTypes';

const initialState = {
  transactions: [],
  currency: '',
  account: {},
  fetchError: false
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case BALANCE_FETCHED:
      const data = action.payload || {};
      const {transactions = [], account = {}, currency = ''} = data;

      return {
        ...state,
        transactions,
        account,
        currency,
        fetchError: false
      }

    case BALANCE_FETCH_ERROR:
      return {
        ...state,
        fetchError: true
      }

    default:
      return state;
  }
}
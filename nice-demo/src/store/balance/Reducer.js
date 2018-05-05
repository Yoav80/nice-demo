export const BALANCE_FETCHED = 'BALANCE_FETCHED';
export const BALANCE_FETCH_ERROR = 'BALANCE_FETCH_ERROR';

const initialState = {
  transactions: [],
  currency: '',
  account: {},
  fetchError: false

}
export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case BALANCE_FETCHED:
      const data = action.payload.data || {};
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
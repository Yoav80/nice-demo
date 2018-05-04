export const BALANCE_FETCHED = 'BALANCE_FETCHED';
export const BALANCE_FETCHE_ERROR = 'BALANCE_FETCHE_ERROR';

const initialState = {
  acount: {},
  transactions: [],

}
export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case BALANCE_FETCHED:
      return {
        ...state,
        transactions: action.payload.transactions,
        acount: action.payload.acount
      }
    case BALANCE_FETCHE_ERROR:
      return {}
    default:
      return state;
  }
}
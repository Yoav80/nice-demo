import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import balance from './balanceReducer'

const reducer = combineReducers({
  balance: balance
})

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default store

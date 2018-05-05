import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import balance from './balance/Reducer'
import logger from 'redux-logger'

// TODO-y: split account and balance datae
const reducer = combineReducers({
  balance: balance
})


const middleware = applyMiddleware(thunkMiddleware, logger)
const store = createStore(reducer, middleware)

export default store

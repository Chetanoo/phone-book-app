import { combineReducers } from 'redux'
import { counter } from './counter.reducer'
import { subscriber } from './subscriber.reducer'

export default combineReducers({
  counter,
  subscriber
})

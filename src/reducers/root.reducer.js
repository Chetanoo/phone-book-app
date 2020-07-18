import { combineReducers } from 'redux'
import { subscriber } from './subscriber.reducer'
import { alert } from './alert.reducer'

export default combineReducers({
  subscriber,
  alert
})

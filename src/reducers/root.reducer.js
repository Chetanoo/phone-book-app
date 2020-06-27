import { combineReducers } from 'redux';
import { counter } from './counter.reducer';
import { search } from './search.reducer';

export default combineReducers({
  counter,
  search
});

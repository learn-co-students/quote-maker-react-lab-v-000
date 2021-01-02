import { combineReducers } from 'redux';
import quotes from './quotes';
import uuid from 'uuid';


const id = uuid();
console.log(id) // '1fd323

export default combineReducers({
  quotes
});

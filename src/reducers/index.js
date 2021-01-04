import { combineReducers } from 'redux';
import quotes from './quotes';

import uuid from 'uuid';
 
const id = uuid();
console.log(id)

export default combineReducers({
  quotes
});

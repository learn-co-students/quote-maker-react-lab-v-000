import { combineReducers } from 'redux';
import quotesReducer from './quotes';
import uuid from 'uuid'

const rootReducer = combineReducers({
  quotes: quotesReducer
});

export default rootReducer;

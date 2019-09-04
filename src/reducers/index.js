import { combineReducers } from 'redux';
import quotesReducer from './quotes';

const rootReducer = combineReducers({
  quotes: quotesReducer
});

export default rootReducer

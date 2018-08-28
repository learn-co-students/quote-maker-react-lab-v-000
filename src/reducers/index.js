import { combineReducers } from 'redux';
import quotes from './quotes';

const rootReducer = combineReducers({
  quotes: quotes
});

export default rootReducer

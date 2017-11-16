import { combineReducers } from 'redux';
import quotes from './quotes';

export default combineReducers({
  quotes,
});

// export function combineReducers({quotes: quotes}){
//   return (state = {}, action) => {
//       return Object.keys(reducers).reduce(
//          (nextState, key) => {
//              nextState[key] = reducers[key](state[key], action);
//              return nextState;
//          }, {}
//       )
//   }
// }
import uuid from 'uuid';

export default quotesReducer;

function quotesReducer(state = [], action){
  let idx;
  switch(action.type){
    case 'ADD_QUOTE':
      return [...state,action.quote]
    case 'REMOVE_QUOTE':
      let idx = state.indexOf(action.quoteId);
      return [...state.slice(0,idx), ...state.slice(idx + 1)];
    case 'UPVOTE_QUOTE':
      return state;
    case 'DOWNVOTE_QUOTE':
      return state;
    default:
      return state;
  }
}

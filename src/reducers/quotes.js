import uuid from 'uuid';

const id = uuid();

export function quotes(state = [], action){
  switch (action.type) {
  case "ADD_QUOTE":
    const quote = {
      content: action.quote.content,
      author: action.quote.author,
      votes: action.quote.votes,
      id: id}
    return Object.assign({}, state, {quotes: state.quotes.concat(quote)})
  case "REMOVE_QUOTE":
    const quotes = state.quotes.filter(quotes => quote.id !== action.id);
    return Object.assign({}, state, { quotes });
  default:
    return state
  }
}

export function quoteVotes(state = [], action){
  switch (action.type) {
  case "UPVOTE_QUOTE":
    debugger;
    return [].concat(state, action.quoteId)
  case "DOWNVOTE_QUOTE":
    let idx = state.indexOf(action.quoteId)
    return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
  default:
    return state
  }
}

function combineReducers(reducers){
  return (state = {}, action)=>{
    return Object.keys(reducers).reduce(
     (nextState, key)=>{
       nextState[key] = reducers[key](state[key], action);
       return nextState
     }, {}
   )
  }
}

export default (state = [], action) => {
  return state;
}

// TODO: Create action creators as defined in tests
export function addQuote(quote){
  return {
    type: "ADD_QUOTE",
    quote
  }
}

export function removeQuote(quoteId){
  return {
    type: "REMOVE_QUOTE",
    quoteId
  }
}

export function upvoteQuote(quoteId){
  return {
    type: "UPVOTE_QUOTE",
    quoteId
  }
}

export function downvoteQuote(quoteId){
  return {
    type: "DOWNVOTE_QUOTE",
    quoteId
  }
}

export function combineReducers(reducers){
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key)=>{
        nextState[key] = reducers[key](state[key], action);
        return nextState
      }, {}
    )
  }
}

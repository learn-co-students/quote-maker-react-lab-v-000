export default (state = [], action) => {
  let idx;
  let updatedState;
  switch (action.type) {
  case 'ADD_QUOTE':
    return [...state, action.quote];
  case 'REMOVE_QUOTE':
    idx = state.findIndex(quote => quote.id  === action.quoteId)
    return [...state.slice(0, idx), ...state.slice(idx + 1)];
  case 'UPVOTE_QUOTE':
    updatedState = state.slice();
    idx = updatedState.findIndex(quote => quote.id  === action.quoteId)
    updatedState[idx].votes += 1
    return updatedState
  case 'DOWNVOTE_QUOTE':
    updatedState = state.slice();
    idx = updatedState.findIndex(quote => quote.id  === action.quoteId)
    if (updatedState[idx].votes !== 0) {
      updatedState[idx].votes -= 1
    }
    return updatedState
  default:
    return state;
  }

}

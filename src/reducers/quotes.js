export default (state = [], action) => {
  let idx;
  switch (action.type) {
  case 'ADD_QUOTE':
    return [...state, action.quote];
  case 'REMOVE_QUOTE':
    idx = state.findIndex(quote => quote.id  === action.quoteId)
    return [...state.slice(0, idx), ...state.slice(idx + 1)];
  case 'UPVOTE_QUOTE':
    let updatedState = state.slice();
    idx = updatedState.findIndex(quote => quote.id  === action.quoteId)
    updatedState[idx].votes += 1
    return updatedState
  case 'DOWNVOTE_QUOTE':
    let updatedState2 = state.slice();
    idx = updatedState2.findIndex(quote => quote.id  === action.quoteId)
    if (updatedState2[idx].votes !== 0) {
      updatedState2[idx].votes -= 1
    }
    return updatedState2
  default:
    return state;
  }

}

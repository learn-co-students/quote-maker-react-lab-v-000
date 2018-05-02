export default function manageQuotes (state = [], action)  {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat({...action.quote});
    case "REMOVE_QUOTE":
      let index = state.findIndex( quote => quote.id === action.quoteId);
      return [].concat(state.slice(0, index), state.slice(index + 1, state.length));
    case "UPVOTE_QUOTE":
      let idx = state.findIndex(quote => quote.id === action.quoteId);
      return [].concat(state.slice(0, idx), {...state[idx], votes: state[idx].votes + 1}, state.slice(idx + 1, state.length));
    case "DOWNVOTE_QUOTE":
      let ind = state.findIndex(quote => quote.id === action.quoteId);
      if (state[ind].votes > 0) {
        return [].concat(state.slice(0, ind), {...state[ind], votes: state[ind].votes - 1}, state.slice(ind + 1, state.length))
      } else {
        return state;
      } 
    default:
      return state;
  }
}
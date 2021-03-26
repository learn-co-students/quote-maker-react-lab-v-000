export default (state = [], action) => {
  console.log(action)
  console.log(state)
  let idx = null;
  switch(action.type) {
    case "ADD_QUOTE":
     return [...state, action.quote]
    case "REMOVE_QUOTE":
      let quotes = state.filter(quote => quote.id !== action.quoteId);
      console.log(quotes);
      return quotes;

    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      state[idx].votes = state[idx].votes + 1;
      console.log(state);
      return state

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      if (state[idx].votes !== 0) 
        state[idx].votes = state[idx].votes - 1;
      return state
    default:
     break;
  }
  
  return state;
}

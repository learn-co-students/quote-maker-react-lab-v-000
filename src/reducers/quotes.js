export default (state = [], action) => {
  let idx;
  let quote;
  
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
 
    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
    case "UPVOTE_QUOTE":
      idx = state.find(quote => quote.id === action.quoteId);
      idx.votes += 1
      return [...state]

    case "DOWNVOTE_QUOTE":
      idx = state.find(quote => quote.id === action.quoteId);
      if (idx.votes > 0) {
        idx.votes -= 1
      }
      return [...state]

    default:
      return state;
  }
}
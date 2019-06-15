export default (state = [], action) => {

  switch (action.type) {
    
    case "ADD_QUOTE":
      return state.concat(action.quote);
  
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
  
    case "UPVOTE_QUOTE":
      const upIndex = state.findIndex(quote => quote.id === action.quoteId);
      const upvotedQuote = state[upIndex];
      upvotedQuote.votes += 1;
      return [...state.slice(0, upIndex), upvotedQuote, ...state.slice(upIndex + 1)];
      
    case "DOWNVOTE_QUOTE":
      const downIndex = state.findIndex(quote => quote.id === action.quoteId);
      const downvotedQuote = state[downIndex];
      if (downvotedQuote.votes > 0) {
        downvotedQuote.votes -= 1;
      }
      return [...state.slice(0, downIndex), downvotedQuote, ...state.slice(downIndex + 1)];
      
  
    default:
      return state;
  }
}

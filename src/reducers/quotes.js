import uuid from 'uuid'
export default (state = [], action) => {
  let idx;

  switch (action.type) {
    case "ADD_QUOTE":
      return [ ...state, action.quote ];
    
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
      
    case "UPVOTE_QUOTE":
      return state.map(quote => {
        if (quote.id === action.quoteId) { quote.votes += 1 }
        
        return quote;
      });
    
    case "DOWNVOTE_QUOTE":
      return state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) { quote.votes -= 1 }

        return quote;
      });

    default:
      return state;
  }
}

export default (state = [], action) => {
  let quote;
  let index;

  switch(action.type) {
  case "ADD_QUOTE":
    return [...state, {...action.quote, votes: 0}];
  case "REMOVE_QUOTE":
    return state.filter(quote => quote.id !== action.quoteId);
  case "UPVOTE_QUOTE":
    index = state.findIndex(quote => quote.id === action.quoteId)
    quote = state[index]
    return [...state.slice(0, index), {...quote, votes: quote.votes += 1}, ...state.slice(-1, index)];
  case "DOWNVOTE_QUOTE":
    index = state.findIndex(quote => quote.id === action.quoteId)
    quote = state[index]
    if(quote.votes > 0){
      return [...state.slice(0, index), {...quote, votes: quote.votes -= 1}, ...state.slice(-1, index)];
    }
  default:
    return state;
  }
}

export default (state = [], action) => {
  let quoteIndex, quote;
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter((quote) => {return quote.id !== action.quoteId})
    case 'UPVOTE_QUOTE':
      quoteIndex = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[quoteIndex];
      return [].concat(...state.slice(0, quoteIndex), {...quote, votes: quote.votes += 1 }, ...state.slice(quoteIndex+1))
    case 'DOWNVOTE_QUOTE':
      quoteIndex  = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[quoteIndex];
      if (quote.votes > 0) {
        return [].concat(...state.slice(0, quoteIndex), {...quote, votes: quote.votes -= 1}, ...state.slice(quoteIndex+1))
      }   
      return state;
    default:
      return state;
  }
}
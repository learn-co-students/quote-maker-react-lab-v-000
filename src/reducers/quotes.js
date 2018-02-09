import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      return [].concat(action.quote)
    case "REMOVE_QUOTE":
      const quotes = state.filter(quote => quote.id !== action.quoteId);
      return [].concat(quotes)
    case "UPVOTE_QUOTE":
      const upQuote = state.find(quote => quote.id === action.quoteId);
      return [].concat({...upQuote, votes: upQuote.votes + 1});
    case "DOWNVOTE_QUOTE":
      const downQuote = state.find(quote => quote.id === action.quoteId);
      if (downQuote.votes !== 0) {
        return [].concat({...downQuote, votes: downQuote.votes - 1});
      }
    default:
      return state;
  }
}

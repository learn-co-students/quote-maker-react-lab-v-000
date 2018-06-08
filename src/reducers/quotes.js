export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote);
    case 'REMOVE_QUOTE':
     const quotes = state.filter(quote => quote.id !== action.quoteId);
     return quotes;
    case 'UPVOTE_QUOTE':
      let upvote_quote = state.filter(quote => quote.id === action.quoteId);
      upvote_quote[0].votes += 1;
      return upvote_quote;
    case 'DOWNVOTE_QUOTE':
      let downvote_quote = state.filter(quote => quote.id === action.quoteId);
      if (downvote_quote[0].votes !== 0) {
        downvote_quote[0].votes -= 1;
        return downvote_quote;
      }
    default:
      return state;
  }
}
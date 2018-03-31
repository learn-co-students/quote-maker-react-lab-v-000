export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote);
    case 'REMOVE_QUOTE':
      return [].concat(state.filter( quote => quote.id !== action.quoteId ));
    case 'UPVOTE_QUOTE':
      let upQuote = state.filter( q => q.id === action.quoteId )[0];
      upQuote.votes++;
      return [].concat(state.filter( q => q.id !== action.quoteId ), [upQuote]);
    case 'DOWNVOTE_QUOTE':
      let downQuote = state.filter( q => q.id === action.quoteId )[0];
      if (downQuote.votes > 0) {
        downQuote.votes--;
        return [].concat(state.filter( q => q.id !== action.quoteId ), [downQuote]);
      }
    default:
      return state;
  }
}
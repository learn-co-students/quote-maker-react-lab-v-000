export default (state = [], action) => {
  let quote;
  switch(action.type) {
    case 'ADD_QUOTE':
      return Object.assign([], state.concat(action.quote));

    case 'REMOVE_QUOTE':
      return Object.assign([], state.filter(quote => quote.id !== action.quoteId));

    case 'UPVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId);
      quote.votes++
      return state;

    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId);
      if (quote.votes > 0) {quote.votes-- }
      return state;

    default:
      return state;
  }
}

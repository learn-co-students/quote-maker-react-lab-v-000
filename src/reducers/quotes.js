export default (state = [], action) => {
  let idx;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx];
      return [...state, ...quote.votes++]
    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId);
      if (quote.votes > 0) {
        return [...state, ...quote.votes--];
      } else {
        return state;
      }
    default:
      return state;
  }
};

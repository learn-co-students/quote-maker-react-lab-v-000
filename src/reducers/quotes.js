export default (state = [], action) => {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'UPVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId);
      quote.votes += 1
      return [...state];
    case 'DOWNVOTE_QUOTE':
      let quote = state.find(quote => quote.id === action.quoteId);
      quote.votes = quote.votes > 0 ? quote.votes - 1: 0
      return [...state];
    default:
    return state;
  }
}

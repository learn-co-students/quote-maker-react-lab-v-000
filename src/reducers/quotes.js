export default (state = [], action) => {
  let idx;
  let quote;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx]
      return [...state.slice(0, idx), {...quote, votes:quote.votes+=1 },...state.slice(idx + 1)]
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx];
      if (quote.votes > 0) {
        return [...state.slice(0,idx), { ...quote, votes: quote.votes -= 1 }, ...state.slice(idx + 1)]
      }
      return state;
    default:
      return state;
  }
}

export default (state = [], action) => {
  let idx;
  let quote;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      quote = state.find(obj => obj.id === action.quoteId);
      idx = state.indexOf(quote)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE':
      quote = state.find(obj => obj.id === action.quoteId);
      quote.votes+= 1
      return [...state]
    case 'DOWNVOTE_QUOTE':
      quote = state.find(obj => obj.id === action.quoteId);
      if (quote.votes > 1) {
        quote.votes -= 1
      }
      return [...state]
    default:
      return state;
  }

}

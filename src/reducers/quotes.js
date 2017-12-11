export default (state = [], action) => {
  let idx;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = Object.assign({}, state[idx], { votes: state[idx].votes + 1 })
      return [ ...state.slice(0, idx), quote, ...state.slice(idx + 1) ];
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      if (state[idx].votes > 0) {
        quote = Object.assign({}, state[idx], { votes: state[idx].votes - 1 })
        return [ ...state.slice(0, idx), quote, ...state.slice(idx + 1) ];
      } else {
        return state;
      }
    default:
      return state;
  }
}

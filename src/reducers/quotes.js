let idx;
let quote;

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [].concat(action.quote);
    case 'REMOVE_QUOTE':
      const keptQuotes = state.filter(quote => quote.id !== action.quoteId);
      return keptQuotes
    case 'UPVOTE_QUOTE':
      debugger
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = Object.assign({}, state[idx], { votes: state[idx].votes + 1 });
      return [...state.slice(0, idx), quote, ...state.slice(idx + 1)]
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      if (state[idx].votes > 0) {
        quote = Object.assign({}, state[idx], { votes: state[idx].votes - 1 });
        return [...state.slice(0, idx), quote, ...state.slice(idx + 1)];
      } else {
        return state;
      }
    default:
      return state;
  }
}
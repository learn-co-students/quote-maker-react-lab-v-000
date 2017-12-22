let index;
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
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = Object.assign({}, state[index], { votes: state[index].votes + 1 });
      return [...state.slice(0, index), quote, ...state.slice(index + 1)]
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      if (state[index].votes > 0) {
        quote = Object.assign({}, state[index], { votes: state[index].votes - 1 });
        return [...state.slice(0, index), quote, ...state.slice(index + 1)];
      } else {
        return state;
      }
    default:
      return state;
  }
}

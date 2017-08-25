export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [].concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      var index = state.findIndex(quote => quote.id === action.quoteId);
      var quote = state[index];
      return [...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)];
    case 'DOWNVOTE_QUOTE':
      var index = state.findIndex(quote => quote.id === action.quoteId);
      var quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
    default:
      return state;
  }
}

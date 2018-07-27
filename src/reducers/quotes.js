export default (state = [], action) => {
  let quoteIndex;
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      quoteIndex = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[quoteIndex];
      return [
        ...state.slice(0, quoteIndex), 
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(quoteIndex + 1, quoteIndex.length)
      ];
    case 'DOWNVOTE_QUOTE':
      quoteIndex = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[quoteIndex];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, quoteIndex), 
          Object.assign({}, quote, { 
            votes: quote.votes -= 1 
          }),
          ...state.slice(quoteIndex + 1, quoteIndex.length)
        ]
      } else {
          return state;
      };
      
    default:
      return state;
  }
}
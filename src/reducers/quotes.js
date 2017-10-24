export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_QUOTE':
      {debugger};
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      let index = state.findIndex(quote => quote.id === action.quoteId);
      let quote = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ];
    case 'DOWNVOTE_QUOTE':
      let id = state.findIndex(quote => quote.id === action.quoteId);
      let downQuote = state[id];

      return [
        ...state.slice(0, id),
        Object.assign({}, downQuote, { votes: downQuote.votes == 0 ? downQuote.votes : downQuote.votes - 1 }),
        ...state.slice(id + 1)
      ];
    default:
      return state;
  }
}
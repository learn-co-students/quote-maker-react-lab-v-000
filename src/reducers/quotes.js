export default (state = [], action) => {
  let idx;

  switch(action.type) {
    case "ADD_QUOTE":
      return [
        ...state, action.quote
      ];

    case 'REMOVE_QUOTE':
      idx = state.findIndex((quote) => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];


    case 'UPVOTE_QUOTE':
      idx = state.findIndex((quote) => quote.id === action.quoteId);
      let upQuote = state[idx];

      return [ ...state.slice(0, idx),
        {...upQuote,  votes: upQuote.votes += 1 },
        ...state.slice(idx + 1)];

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex((quote) => quote.id === action.quoteId);
      let downQuote = state[idx];

      if (downQuote.votes > 0) {
        return [ ...state.slice(0, idx),
          {...upQuote,  votes: upQuote.votes += 1 },
          ...state.slice(idx + 1)];
      } else {
        return [...state]
      }
    
    default:
      return state;
  }
}

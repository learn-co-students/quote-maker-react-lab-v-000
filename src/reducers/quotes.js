


function quotesReducer(state = [], action) {

  let idx;
  let quote;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx];
      let updatedQuote = {...quote, votes: quote.votes + 1}
      return [ ...state.slice(0, idx), updatedQuote, ...state.slice(idx + 1)];

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx];
      if (quote.votes > 0) {
        let updatedQuote = {...quote, votes: quote.votes - 1}
        return [ ...state.slice(0, idx), updatedQuote, ...state.slice(idx + 1)];
      }
      return state;


    default:
      return state;

  }
}

export default quotesReducer;

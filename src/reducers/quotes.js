export default (state = [], action) => {
  let quote;
  let idx;

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[idx]
      return [...state.slice(0, idx), Object.assign({}, quote, {votes: ++quote.votes}), ...state.slice(idx + 1)]

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[idx]
      if (quote.votes > 0) {
        return [...state.slice(0, idx), Object.assign({}, quote, {votes: --quote.votes}), ...state.slice(idx + 1)]
      }

    default:
      return state
  }

}

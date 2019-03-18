export default (state = [], action) => {
  let index = state.findIndex(quote => quote.id === action.quoteId);
  let quote = state[index];
  let voter = (incrementer) => {
    return [
      ...state.slice(0,index),
      Object.assign({}, quote, {votes: quote.votes += incrementer}),
      ...state.slice(index+1)
    ];
  }

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      return voter(1);
    case "DOWNVOTE_QUOTE":
      if (quote.votes > 0) {
        voter(-1);
      };
    default:
      return state;
  }
}

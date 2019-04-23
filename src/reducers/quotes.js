export default (state = [], action) => {
  let index;
  switch (action.type) {
    case "ADD_QUOTE":
      // return state.concat(action.quote);
      return [ ...state, action.quote ];

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      let quote = state.filter(quote => quote.id === action.quoteId);
      quote[0].votes += 1;
      state = state.filter(quote => quote.id !== action.quoteId);
      return state.concat(quote);

    case "DOWNVOTE_QUOTE":
      return state;

    default:
      return state;
  }
}

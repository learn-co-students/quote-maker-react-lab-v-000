export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      // add votes?
      return [ ...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter( quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      return state.map ( function (quote, index) {
        if (quote.id === action.quoteId) quote.votes++
        return quote;
      });
    case "DOWNVOTE_QUOTE":
      return state.map ( function (quote, index) {
        if ((quote.id === action.quoteId) && (quote.votes > 0))quote.votes--
        return quote;
      });
    default:
      return state;
  }

}

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      var quotes = [...state];
      quotes.find(quote => quote.id === action.quoteId).votes++;
      return quotes;
    case "DOWNVOTE_QUOTE":
      //var quotes = [...state];
      var quote = quotes.find(quote => quote.id === action.quoteId);
      if(quote.votes > 0){ quote.votes--};
      return quotes;
    default:
  return state;
  }
}

import uuid from "uuid";

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      let quote = action.quote;
      quote.id = uuid();
      quote.votes = 0;
      return [].concat(state, quote);
    case "REMOVE_QUOTE":
      let quotes = state.filter(quote => quote.id !== action.quoteId);
      return quotes;
    case "UPVOTE_QUOTE":
      let upvotedQuote = state.find(quote => quote.id === action.quoteId);
      upvotedQuote.votes++;
      return state
        .filter(quote => quote.id !== action.quoteId)
        .concat(upvotedQuote);
    case "DOWNVOTE_QUOTE":
      let downvotedQuote = state.find(quote => quote.id === action.quoteId);
      if (downvotedQuote.votes > 0) {
        downvotedQuote.votes--;
      }
      return state
        .filter(quote => quote.id !== action.quoteId)
        .concat(downvotedQuote);
    default:
      return state;
  }
};

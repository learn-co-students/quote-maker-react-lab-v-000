import uuid from "uuid";

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);
    case "REMOVE_QUOTE":
      debugger;
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      let quote = state.filter(quote => quote.id === action.quoteId);
      let arr = state.filter(quote => quote.id !== action.quoteId);
      quote[0].votes++;
      return arr.concat(quote[0]);
    case "DOWNVOTE_QUOTE":
      let quotez = state.filter(quote => quote.id === action.quoteId);
      let arr1 = state.filter(quote => quote.id !== action.quoteId);
      if (quotez[0].votes >= 1) {
        quotez[0].votes--;
        return arr1.concat(quotez[0]);
      } else {
        return arr1.concat(quotez[0]);
      }

    default:
      return state;

    // case "UPVOTE_QUOTE"
    // case "DOWNVOTE_QUOTE"
  }
};

import uuid from 'uuid';

export default (state = [], action) => {
  let quote;

  switch(action.type) {
    case "ADD_QUOTE":
      const newQuote = Object.assign(action.quote, {id: uuid(), votes: 0});
      return state.concat(newQuote);
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      quote = state.find(quote => quote.id === action.quoteId);
      quote.votes += 1;
      return state.filter(quote => quote.id !== action.quoteId).concat(quote);
    case "DOWNVOTE_QUOTE":
      quote = state.find(quote => quote.id === action.quoteId);
      if (quote.votes > 0) {
        quote.votes -= 1;
        return state.filter(quote => quote.id !== action.quoteId).concat(quote);
      }
      return state;
    default:
      return state;
  }
}

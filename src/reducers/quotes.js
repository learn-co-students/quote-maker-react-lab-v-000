import types from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_QUOTE:
      return [...state, action.quote];
    case types.REMOVE_QUOTE: {
      const quotes = [...state];
      const index = quotes.findIndex(({ quoteId }) => quoteId === action.id);
      quotes.splice(index, 1);
      return quotes;
    }
    case types.UPVOTE_QUOTE: {
      const quotes = [...state];
      const quote = quotes.find(({ quoteId }) => quoteId === action.id);
      quote.votes++;
      return quotes;
    }
    case types.DOWNVOTE_QUOTE: {
      const quotes = [...state];
      const quote = quotes.find(({ quoteId }) => quoteId === action.id);
      if (quote.votes > 0) quote.votes--;
      return quotes;
    }
    default:
      return state;
  }
};

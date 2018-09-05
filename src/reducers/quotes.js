export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);
    // return {
    //   ...state,
    //   quotes: [...state.quotes, action.quote]
    // };
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    // idx = state.quote.indexOf(action.id);
    // return {
    //   ...state,
    //   quote: [state.authors.slice(0, idx), state.authors.slice(idx + 1)]
    // };
    case "UPVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: (quote.votes += 1) }),
        ...state.slice(index + 1)
      ];

    case "DOWNVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: (quote.votes -= 1) }),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default:
      return state;
  }
};

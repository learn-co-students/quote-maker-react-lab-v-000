import uuid from 'uuid';

export default (state = [], action) => {

  let i
  let quote

  switch (action.type) {

    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      i = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[i];

    return [
      ...state.slice(0, i),
      Object.assign({}, quote, { votes: quote.votes += 1 }),
      ...state.slice(i + 1)
    ];

    case "DOWNVOTE_QUOTE":
    i = state.findIndex(quote => quote.id === action.quoteId);
    quote = state[i];
    if (quote.votes > 0) {
      return [
        ...state.slice(0, i),
        Object.assign({}, quote, { votes: quote.votes -= 1 }),
        ...state.slice(i + 1)
      ];
    }
    return state;

    default:
      return state;
  }
}

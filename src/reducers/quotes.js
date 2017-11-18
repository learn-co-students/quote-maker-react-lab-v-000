export default (state = [], action) => {
  let otherQuotes;
  let quote;
  let index;
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];

      return [
        ...state.slice(0, index),
        Object.assign({}, quote, {votes: quote.votes + 1}),
        ...state.slice(index + 1)
      ]
    case 'DOWNVOTE_QUOTE':
    index = state.findIndex(quote => quote.id === action.quoteId);
    quote = state[index];
    const newCount = quote.votes > 0 ? quote.votes - 1 : quote.votes;

    return [
      ...state.slice(0, index),
      Object.assign({}, quote, {votes: newCount}),
      ...state.slice(index + 1)
    ]
    default:
      return state;
  }
}

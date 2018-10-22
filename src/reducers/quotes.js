export default function reducer(state = [], action) {
  const idx = state.findIndex(quote => quote.id === action.quoteId);
  const quote = state[idx];

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      return [
        ...state.slice(0, idx),
        Object.assign({}, quote, {votes: quote.votes += 1}),
        ...state.slice(idx +1)
      ]

    case 'DOWNVOTE_QUOTE':
      if (quote.votes > 0) {
        return [
          ...state.slice(0, idx),
          Object.assign({}, quote, {votes: quote.votes -= 1}),
          ...state.slice(idx +1)
        ]
      }

    default:
      return state;
  }
}

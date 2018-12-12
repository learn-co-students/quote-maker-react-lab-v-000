 function quotesReducer(state = [], action) {
   let index;
   let quote;

  switch(action.type) {
    case 'ADD_QUOTE':
        return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => {
        return quote.id !== action.quoteId;
      })

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ]

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ]
      } else {
        return state
      }

    default:
      return state
  }
}

export default quotesReducer

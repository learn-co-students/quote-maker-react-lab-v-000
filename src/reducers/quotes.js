export default (state = [], action) => {
  let index;
  let quote;

  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]

      return [
        // slice state up to the index found above
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes+= 1}),
        // assign object with different votes to avoid overriding
        ...state.slice(index + 1)
      ];
    
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]
      if (quote.votes > 0) {
      return [
        // slice state up to the index found above
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes -= 1 }),
        // assign object with different votes to avoid overriding
        ...state.slice(index + 1)
        ];
      }
      return state;

    case 'REMOVE_QUOTE':
      // filter out the quoteId
      return state.filter(quote => quote.id !== action.quoteId)

    default:
      return state;
  }
}

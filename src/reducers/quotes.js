export default (state = [], action) => {
  let quote;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      quote.votes += 1;
      return [...state.filter(quote => quote.id !== action.quoteId), quote]
    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      if (quote.votes > 0) {
        quote.votes -= 1;
      } else {
        alert("Can't go lower than 0")
      }
      return [...state.filter(quote => quote.id !== action.quoteId), quote]
    default:
      return state;
  }
}

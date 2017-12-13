export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
    console.log(action)
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      const thisQuote = state.find(quote => quote.id === action.quoteId)
      thisQuote.votes ++
      return state
    case 'DOWNVOTE_QUOTE':
      const thatQuote = state.find(quote => quote.id === action.quoteId)
      if (thatQuote.votes > 0) {
        thatQuote.votes -= 1
      }
      return state
    default:
      return state
  }
}

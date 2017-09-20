export default (state = [], action) => {
  switch (action.type){
    case "ADD_QUOTE":
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      const quotes = state.filter(quote => quote.id !== action.quoteId )
      return  state = quotes
    case "UPVOTE_QUOTE":
      const upVoteQuotes = state.map(quote => {
        if (quote.id === action.quoteId) quote.votes ++
        return quote
      })
      return state = upVoteQuotes
    case "DOWNVOTE_QUOTE":
      const downVoteQuotes = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) quote.votes --
        return quote
      })
      return state = downVoteQuotes
    default:
      return state
  }
}

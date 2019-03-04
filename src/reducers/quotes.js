export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      let upvoted = state.map(function(quote) {
        if (quote.id == action.quoteId) {
          quote.votes++
        }
        return quote
      })
      return upvoted
    case "DOWNVOTE_QUOTE":
      let downvoted = state.map(function(quote) {
        if (quote.id == action.quoteId && quote.votes > 0) {
          quote.votes--
        }
        return quote
      })
      return downvoted

    default:
      return state
  }
}

export default (state = [], action) => {
  let index
  let voteCount

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      voteCount = state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: ++quote.votes}
        }
      })
      return voteCount

    case "DOWNVOTE_QUOTE":
      voteCount = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return {...quote, votes: --quote.votes}
        } else {
          return quote
        }
      })
      return voteCount

    default:
      return state;
  }
}

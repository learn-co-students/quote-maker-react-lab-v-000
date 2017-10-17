export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      return state.map((quote) => {
        if (quote.id === action.quoteId) {
          return {
            author: quote.author,
            content: quote.content,
            id: quote.id,
            votes: quote.votes + 1
          }
        } else {
          return quote;
        }
      })
    case "DOWNVOTE_QUOTE":
      return state.map((quote) => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return {
            author: quote.author,
            content: quote.content,
            id: quote.id,
            votes: quote.votes - 1
          }
        } else {
          return quote;
        }
      })
    default:
      return state;
  }

}

import uuid from 'uuid'


export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
    return [].concat(state, action.quote)
    case "REMOVE_QUOTE":
    const quotes = state.filter(quote => {
      return quote.id !== action.quoteId
    })
    return quotes
    case "UPVOTE_QUOTE":
    const upvotedQuote = state.filter(quote => {
      if (quote.id === action.quoteId) {
        quote.votes += 1
      }
      return quote
    })
    return upvotedQuote
    case "DOWNVOTE_QUOTE":
    const downvotedQuote = state.filter(quote => {
      if (quote.id === action.quoteId && quote.votes !== 0) {
        quote.votes -= 1
      }
      return quote
    })
    return downvotedQuote
    default:
    return state
  }
}

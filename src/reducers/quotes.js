export default (state = [], action) => {
  switch (action.type){
    case "ADD_QUOTE":
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      var newState = state.filter(quote => quote.id !== action.quoteId)
      var quote = state.find(quote => quote.id === action.quoteId)
      var newQuote = Object.assign({}, quote, {votes: quote.votes + 1})
      return [...newState, newQuote]
    case "DOWNVOTE_QUOTE":
      var newState = state.filter(quote => quote.id !== action.quoteId)
      var quote = state.find(quote => quote.id === action.quoteId)
      var newQuote = (quote.votes <= 0) ? quote : Object.assign({}, quote, {votes: quote.votes - 1})
      return [...newState, newQuote]
    default:
      return state;
  }
}

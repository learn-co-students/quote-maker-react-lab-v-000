export default (state = [], action) => {
  switch (action.type){
    case "ADD_QUOTE":
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      const quotes = state.filter(quote => quote.id !== action.quoteId )

      console.log(quotes)
      return state = quotes)
    case "UPVOTE_QUOTE":
      return state
    case "DOWNVOTE_QUOTE":
      return state
    default:
      return state
  }
}

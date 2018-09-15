export default (state = [], action) => {
  let index


  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
      case "UPVOTE_QUOTE":
      // return
    default:
      return state
  }


  return state;
}

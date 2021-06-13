export default (state = [], action) => {
  let copy = [...state]
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote=> quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      copy.find(q=> q.id === action.quoteId).votes += 1
      return copy
    case "DOWNVOTE_QUOTE":
      const quote = copy.find(q => q.id === action.quoteId)
      if (quote.votes > 0) {quote.votes -= 1}
      return copy
  
    default:
      return state;
  }
}

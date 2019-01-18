export default (state = [], action) => {
  let idx;
  let updatedQuote;
  
  switch (action.type) {
    
    case "ADD_QUOTE":
      return [...state, {...action.quote, votes: 0}]

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
     updatedQuote = state.find(quote => quote.id === action.quoteId)
     idx = state.indexOf(updatedQuote)
     ++updatedQuote.votes
      return Object.assign([...state], {[idx]: updatedQuote})

    case "DOWNVOTE_QUOTE":
      updatedQuote = state.find(quote => quote.id === action.quoteId)
      idx = state.indexOf(updatedQuote)
    if (updatedQuote.votes > 0) {
        --updatedQuote.votes
      return Object.assign([...state], {[idx]: updatedQuote})
    } 
    
  default:
  return state;
  }
}
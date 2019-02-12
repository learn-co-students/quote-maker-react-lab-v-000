export default (state = [], action) => {
  let idx
  let upvoteState
  switch(action.type) {

  case "ADD_QUOTE":
    return [...state, action.quote]
  case "REMOVE_QUOTE":
    return state.filter(quote=> quote.id !== action.quoteId)

  case "UPVOTE_QUOTE":
     upvoteState = state.map(function(quote){
      if(quote.id === action.quoteId){
        quote.votes+=1
        return quote
      }
      else {
        return quote
      }
    })
    return upvoteState
  case "DOWNVOTE_QUOTE":
    idx = state.findIndex(quote => quote.id === action.quoteId)
    if (state[idx].votes > 0) {
      return [...state, ...state[idx].votes -= 1]
    }
  default:
    return state;

  }
}

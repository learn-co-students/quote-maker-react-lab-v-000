export default (state = [], action) => {
    let targetQuote = state.find(quote => quote.id === action.quoteId)
    let update = (modifiedQuote) => state.map(quote => quote === targetQuote ? modifiedQuote : quote)
  switch(action.type){
    case "ADD_QUOTE":
      return [ ...state, action.quote ]
    case "REMOVE_QUOTE":
      return [ ...state.filter(quote => quote !== targetQuote) ]
    case "UPVOTE_QUOTE":
      return update({...targetQuote, votes: targetQuote.votes + 1 })
    case "DOWNVOTE_QUOTE":
      if (targetQuote.votes < 1){return state}
      return update({...targetQuote, votes: targetQuote.votes - 1 })
    default: return state;
  }
}

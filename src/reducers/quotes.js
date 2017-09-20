export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return [...state.filter((quote)=> quote.id !== action.quoteId)]
    case "UPVOTE_QUOTE":
       let uvQuote = state.filter(quote => quote.id == action.quoteId)[0]
       uvQuote = {...uvQuote, votes: uvQuote.votes + 1}
       return [...state.filter(quote => quote.id !== action.quoteId), uvQuote]
    case "DOWNVOTE_QUOTE":
      let dvQuote = state.filter(quote => quote.id == action.quoteId)[0]
      dvQuote = {...dvQuote, votes: dvQuote.votes > 0 ? dvQuote.votes - 1 : dvQuote.votes}
      return [...state.filter(quote => quote.id !== action.quoteId), dvQuote]
    default:
      return []
  }
  return state;
}


export default function quotes (state = [], action){
  switch(action.type){
    case "ADD_QUOTE":
      return [].concat(...state, action.quote)
    case "REMOVE_QUOTE":
      let new_array = state.filter(quote => quote.id !== action.quoteId)
      return [].concat(new_array)
    case "UPVOTE_QUOTE":
      var quote = state.find(quote=> quote.id === action.quoteId)
      quote.votes+=1
      return [].concat(...state)
    case "DOWNVOTE_QUOTE":
      var quote = state.find(quote=> quote.id === action.quoteId)
      if(quote.votes > 0){
      quote.votes-=1 }
      return [].concat(...state)
    default:
    return state;
}
}

let idx;

export default (state = [], action) => {
  switch(action.type) {

    case "ADD_QUOTE":
    return [].concat(action.quote)

    case "REMOVE_QUOTE":
    return state.filter((q)=> q.id !== action.quoteId)

    case "UPVOTE_QUOTE":
     return state.map(quote =>
      {
        if (quote.id == action.quoteId)
          quote.votes += 1
        return quote
      })
    // case "UPVOTE_QUOTE":
    // idx = state.map((q)=>{
    //   if(q.id === action.quoteId){
    //   q.votes ++
    //   return q
    //   }
    //   return idx
    // })
      case "DOWNVOTE_QUOTE":
      return state.map(quote =>{
         if (quote.id == action.quoteId && quote.votes > 0)
           quote.votes -= 1
         return quote
       })


  default:
    return state
  }
}

export default (state = [], action) => {
  let idx;
  let newQuotes;

  switch(action.type){

    case "ADD_QUOTE":
    console.log(action)
    console.log(action.quote)
    console.log(action.quoteId)
    //console.lop(action.id)
      return [...state, action.quote]

     case "REMOVE_QUOTE":
     idx = state.map(quote => quote.id).indexOf(action.quoteId)

    // console.log(action.quote)
    //   let removeId = state.indexOf(quote.id !== action.quoteId)
    //   //let quotes = state.filter(action.quote.id !== action.id)
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1)
        ]

    case "UPVOTE_QUOTE":
  
      newQuotes = state.map(function(quote) {
        if (quote.id===action.quoteId) {
          quote.votes+=1
          return quote
        }
      })
      return newQuotes

    case "DOWNVOTE_QUOTE":
      newQuotes = state.map(function(quote) {
        if (quote.id===action.quoteId) {
          quote.votes = Math.max(quote.votes-1, 0)
          console.log(quote.votes)
            return quote
          }else{
            return quote
        }
      })
      return newQuotes

    default:
    return state
  }
  
}

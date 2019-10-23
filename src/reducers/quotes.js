import quotes from '../actions/quotes'

export default (state = [], action) => {
  //return state;
  let idx;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
    return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
    let aQuote = state.find(function(quote) {
      debugger
        quote.id === action.quoteId
      })
      console.log("hi")
      console.log(aQuote)
      console.log("bye")

    default:
      return state;
  }
}

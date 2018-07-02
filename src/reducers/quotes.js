// export default (state = [], action) => {
//   return state;
// }

export default(state = [], action) => {
  switch (action.type) {
  	case "ADD_QUOTE":
	    return [].concat(state, action.quote)
	  case "REMOVE_QUOTE":
	    return state.filter(quote => quote.id !== action.quoteId)
	  case "UPVOTE_QUOTE":
	  	let quote = state.filter(quote => quote.id === action.quoteId)
	  	quote[0].votes += 1
	  	return quote
	  case "DOWNVOTE_QUOTE":

	  	let downvotedQuote = state.filter(quote => quote.id === action.quoteId)
	  	if (downvotedQuote[0].votes > 0){
	  		downvotedQuote[0].votes -= 1
	  	}
	  	return downvotedQuote
	  default:
	    return state
  }
}
export default (state = [], action) => {
      let idx;
      switch (action.type) {
	case "ADD_QUOTE":

          return [ ...state, action.quote ]

        case "REMOVE_QUOTE":
	  const newState = state.filter( quote => quote.id !== action.quoteId );

	  return newState

	case "UPVOTE_QUOTE":

	  return state.map(quote => {
           if ( quote.id !== action.quoteId ) {
	     return quote
           }

	   return { 
	     ...quote,
	     votes: quote.votes += 1
	   }
          })

	case "DOWNVOTE_QUOTE":

	  return state.map(quote => {
	   if ( quote.id !== action.quoteId ) {
	     return quote
	   }
	   
	   return {
             ...quote,
	     votes: (quote.votes > 0) ? quote.votes -= 1 : quote.votes
           }
	  })

        default:
          return state;
      }

}

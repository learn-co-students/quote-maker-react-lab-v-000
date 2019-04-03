export default (state = [] , action) => {

	switch (action.type) {

		case 'ADD_QUOTE':		
			return [...state, action.quote]

		case 'REMOVE_QUOTE':			
			return state.filter(quote => quote.id !== action.quoteId)

		case 'UPVOTE_QUOTE': 			
			const upQuotes = state.map(quote => {
				if (quote.id === action.quoteId) { quote.votes += 1 }
				return quote	
				}	
			)			
			return upQuotes

		case 'DOWNVOTE_QUOTE': 
			const downQuotes = state.map(quote => {
				if (quote.id === action.quoteId && quote.votes > 0) { quote.votes -= 1 }
				return quote	
				}	
			)		
			return downQuotes

		default:
  			return state

	}
}

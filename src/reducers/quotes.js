export default (state = [], action) => {
	let newState
	let idx;
	let quote;

	switch(action.type){
		case 'ADD_QUOTE':
			return [...state, action.quote]
			
		case 'REMOVE_QUOTE':
			return {
		        ...state,
		        quotes: [state.quotes.slice(0, idx), state.quotes.slice(idx + 1)]
			}

		case 'UPVOTE':
			newState = state.map(quote => {
				if (quote.id === action.quoteId) {
					return { ...quote, votes: ++quote.votes}
				} else {
					return quote
				}
			})
			return newState
			
		case 'DOWNVOTE':
			newState = state.map(quote => {
				if (quote.id === action.quoteId && quote.votes > 0) {
					return { ...quote, votes: --quote.votes}
				} else {
					return quote
				}
			})
			return newState
	
		default:
			return state;
	}
}


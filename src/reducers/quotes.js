export default (state = [], action) => {
	let newState
	let idx;
	let quote;

	console.log(action)
	console.log("action",action.quote)
	console.log("id", action.quoteId)

	switch(action.type){
		case 'ADD_QUOTE':
			return [...state, action.quote]
			
		case 'REMOVE_QUOTE':
			newState = state.filter(q => {
    			return q.id !== action.quoteId
    		})
    		return newState

		case 'UPVOTE_QUOTE':
			// debugger;
			newState = state.map(quote => {
				if (quote.id === action.quoteId) {
					return { ...quote, votes: ++quote.votes}
				} else {
					return quote
				}
			})
			return newState
			
		case 'DOWNVOTE_QUOTE':
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


export default (state = [], action) => {
	let idx;
	let quote;

	switch(action.type){
		case 'ADD_QUOTE':
			return state.concat(action.quote)
			
		case 'REMOVE_QUOTE':
			return {
		        ...state,
		        quotes: [state.quotes.slice(0, idx), state.quotes.slice(idx + 1)]
			}

		case 'UPVOTE':
			idx = state.findIndex(quote => quote.id === action.quoteId)
  			state[idx].votes += 1
			return state
			
		case 'DOWNVOTE':
			idx = state.findIndex(quote => quote.id === action.quoteId)
  			let count = state[idx].votes
  			count > 0 ? state[idx].votes -= 1 : state
			return state
	
		default:
			return state;
	}
}


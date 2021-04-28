export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_QUOTE':
			return [...state, action.quote]
		case 'REMOVE_QUOTE':
			return state.filter(quote => quote.id !== action.quoteId)
		case 'UPVOTE_QUOTE':
			const i = state.findIndex(quote => quote.id === action.quoteId)

			state[i].votes += 1

			return state
		case 'DOWNVOTE_QUOTE':
			const idx = state.findIndex(quote => quote.id === action.quoteId)

			if (state[idx].votes > 0){
				state[idx].votes -= 1
			}

			return state
		default:
		  return state;
	}
}

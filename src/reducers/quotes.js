export default (state = [], action) => {
	let idx;
	let quote;
	switch (action.type) {
		case "ADD_QUOTE":
			return [...state, action.quote]
		case "REMOVE_QUOTE":
			quote = state.find(quote => quote.id === action.quoteId)
			idx = state.indexOf(quote);
			return [...state.slice(0, idx), ...state.slice(idx + 1)]
		case "UPVOTE_QUOTE":
			quote = state.find(quote => quote.id === action.quoteId)
			idx = state.indexOf(quote);
			return [...state.slice(0, idx), Object.assign({}, quote, {votes: quote.votes += 1}),
			...state.slice(idx + 1)]
		case "DOWNVOTE_QUOTE":
			quote = state.find(quote => quote.id === action.quoteId)
			idx = state.indexOf(quote);
			if (quote.votes > 0) {
				return [...state.slice(0, idx), Object.assign({}, quote, {votes: quote.votes -=1}),
				...state.slice(idx + 1)]
			}
			return state;
	
  	default:
  		return state;
  	};
}

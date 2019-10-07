
export default (state = [], action) => {
	let idx = null

	switch (action.type) {
		case "ADD_QUOTE":
			const temp = [...state, action.quote] 
			return temp
		case "REMOVE_QUOTE":
			const rQuote = state.find(quote => (quote.id === action.quoteId))
			idx = state.indexOf(rQuote)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
		case "UPVOTE_QUOTE":
			const uQuote = state.find(quote => (quote.id === action.quoteId))
			uQuote.votes += 1

			return [...state]
		case "DOWNVOTE_QUOTE":
			const dQuote = state.find(quote => (quote.id === action.quoteId))
			
			if (dQuote.votes === 0) {
				return state
			}

			dQuote.votes -= 1
			
			return [...state]
		default:
			return state
	}
}

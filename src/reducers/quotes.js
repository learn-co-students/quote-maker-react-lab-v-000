export default (state = [], action) => {
	switch (action.type) {
		case 'ADD_QUOTE':
			return [...state, action.quote]
		case 'REMOVE_QUOTE':
			return state.filter(quote => quote.id !== action.quoteId)
		case 'UPVOTE_QUOTE':
			const i = state.findIndex(quote => quote.id === action.quoteId)

			return [...state.slice(0, i),
							{...state[i], votes: state[i].votes + 1	},
								...state.slice(i + 1)
							]
		case 'DOWNVOTE_QUOTE':
			const idx = state.findIndex(quote => quote.id === action.quoteId)
			let newState = null

			if (state[idx].votes > 0){
				newState = [...state.slice(0, idx),
					{...state[idx], votes: state[idx].votes - 1	},
						...state.slice(idx + 1)
					]
			} else {
				newState = state
			}

			return newState
		default:
		  return state;
	}
}

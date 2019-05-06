import { ADDRGETNETWORKPARAMS } from "dns";

export default function quotes(state = [], action) {
	switch (action.type) {

		case 'ADD_QUOTE':
			return [...state, action.quote]

		case 'REMOVE_QUOTE':
			const idx = state.indexOf(action.quoteId)
			// return [...state.splice(0, idx), ...state.splice(idx + 1)]
			return state.filter( quote => quote.id !== action.quoteId)

		case 'UPVOTE_QUOTE':
			return state.map( quote => {
				if(quote.id === action.quoteId){
					return {
						...quote,
						votes: ++quote.votes,
					}
				}
				return quote
			})
		case 'DOWNVOTE_QUOTE':
			return state.map( quote => {
				if(quote.id === action.quoteId){
					return {
						...quote,
						votes: quote.votes > 0 ? quote.votes - 1 : 0,
					}
				}
				return quote
			})
		default:
			return state;
	}
}

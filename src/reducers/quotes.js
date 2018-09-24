export default function quotesReducer(state = [], action) {

	let idx;

	switch(action.type) {
		case "ADD_QUOTE":
			return [...state, action.quote];
		case "REMOVE_QUOTE":
			let e = state.filter((value) => value.id === action.quoteId)[0]
			idx = state.indexOf(e)
			return [...state.slice(0, idx), ...state.slice(idx +1)]
		case "UPVOTE_QUOTE":
			let el = state.filter((value) => value.id === action.quoteId)[0]
			el.votes += 1
			return state;
		case "DOWNVOTE_QUOTE":
			let ele = state.filter((value) => value.id === action.quoteId)[0]
			if (ele.votes > 0){
				ele.votes -= 1
			}
			return state;
		default:
 			return state;
 	}

}

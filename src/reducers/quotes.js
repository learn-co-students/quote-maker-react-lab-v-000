export default (state = [], action) => {
	let idx;

	switch(action.type){
		case 'ADD_QUOTE':
			return {
				...state, 
				quotes: [...state.quotes, action.quote]
			}
		case 'REMOVE_QUOTE':
			return {
		        ...state,
		        quotes: [state.quotes.slice(0, idx), state.quotes.slice(idx + 1)]
			}
		case 'UPVOTE':
			return {

			}
		case 'DOWNVOTE':
			return {

			}
		default:
			return state;
	}
}


import uuid from 'uuid';

export default (state = [], action) => {
	let idx = null

	switch (action.type) {
		case "ADD_QUOTE":
			const temp = [...state, action.quote] 
			return temp
		case "REMOVE_QUOTE":
			idx = state.indexOf(action.quoteId)
			console.log(action.quoteId)
			console.log(idx)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
		default:
			return state
	}
}

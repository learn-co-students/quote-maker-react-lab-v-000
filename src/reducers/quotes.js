import uuid from 'uuid';
 

export default (state = [], action) => {
	switch (action.type) {
		case "ADD_QUOTE":
			const id = uuid()
			return [...state, {...action.quote, id: id}]
		default:
			return state
	}
}

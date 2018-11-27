// TODO: Create action creators as defined in tests
import uuid from 'uuid'


// const id = uuid()


export const addQuote = quoteId => {
	return {
		type: 'ADD_QUOTE',
		quote
	}
}

export const removeQuote = quoteId => {
	return {
		type: 'REMOVE_QUOTE',
		quote
	}
}


export const upvoteQuote = quoteId => {
	return {
		type: 'UPVOTE_QUOTE',
		quote
	}
}



export const downvoteQuote = quoteId => {
	return {
		type: 'DOWNVOTE_QUOTE',
		quote
	}
}
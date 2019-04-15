export const addQuote = quote => {
	return {
		type: 'ADD_QUOTE',
		quote
	}
}

export const removeQuote = quoteId => {
	return {
		type: 'REMOVE_QUOTE',
		quoteId: quoteId
	}
}

export const upvoteQuote = id => {
	return {
		type: 'UPVOTE_QUOTE',
		quoteId: id
	}
}

export const downvoteQuote = id => {
	return {
		type: 'DOWNVOTE_QUOTE',
		quoteId: id
	}
}
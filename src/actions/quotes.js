// TODO: Create action creators as defined in tests
export function addQuote(quote) {
	return {
		type: "ADD_QUOTE",
		quote: Object.assign({}, quote, { votes: 0 })
	}
}

export function removeQuote(id) {
	return {
		type: "REMOVE_QUOTE",
		quoteId: id,
	}
}

export function upvoteQuote(id) {
	return {
		type: "UPVOTE_QUOTE",
		quoteId: id,
	}
}
export function downvoteQuote(id) {
	return {
		type: "DOWNVOTE_QUOTE",
		quoteId: id,
	}
}
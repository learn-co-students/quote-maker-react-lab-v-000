export function addQuote(quote){
	return {
		type: 'ADD_QUOTE',
		quote: quote
	}
}

export function removeQuote(id){
	return {
		type: 'REMOVE_QUOTE',
		quoteId: id
	}
}

export function upvoteQuote(id){
	return {
		type: 'UPVOTE_QUOTE',
		quoteId: id
	}
}

export function downvoteQuote(id){
	return {
		type: 'DOWNVOTE_QUOTE',
		quoteId: id
	}
}
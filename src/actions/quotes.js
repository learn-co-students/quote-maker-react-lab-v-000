// TODO: Create action creators as defined in tests
export function addQuote(quote) {
    return { 
        type: 'ADD_QUOTE', 
        quote }
}

export function removeQuote(quote_id) {
    return { 
        type: 'REMOVE_QUOTE', 
        quoteId: quote_id }
}

export function upvoteQuote(quote_id) {
    return { 
        type: 'UPVOTE_QUOTE', 
        quoteId: quote_id }
}

export function downvoteQuote(quote_id) {
    return { 
        type: 'DOWNVOTE_QUOTE', 
        quoteId: quote_id }
}
// TODO: Create action creators as defined in tests
function addQuote(quote){
    return {type: 'ADD_QUOTE', quote};
}

function removeQuote(id){
    return {type: 'REMOVE_QUOTE', quoteId: id};
}

function upvoteQuote(id){
    return {type: 'UPVOTE_QUOTE', quoteId: id}
}

function downvoteQuote(id){
    return {type: 'DOWNVOTE_QUOTE', quoteId: id}
}

export {addQuote, removeQuote, upvoteQuote, downvoteQuote};
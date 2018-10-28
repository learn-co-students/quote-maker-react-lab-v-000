// TODO: Create action creators as defined in tests
export const addQuote = qoute => {
    return {
        type: "ADD_QUOTE",
        quote: {...qoute, votes: 0} 
    }
}

export const removeQuote = quoteId => {
    return {
    type: "REMOVE_QUOTE",
    quoteId /* new ECMA6 thing where prop and key can be stored at once */
    }
}

export const upvoteQuote  = quoteId => {
    return {
    type: "UPVOTE_QUOTE",
    quoteId
    }
}

export const downvoteQuote = quoteId => {
    return {
        type: "DOWNVOTE_QUOTE",
        quoteId
    }   
}
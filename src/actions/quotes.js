export const addQuote = quote => ({
  type: 'ADD_QUOTE',
  quote: {...quote, votes: 0}
})

export const removeQuote = quoteId => ({
    type: 'REMOVE_QUOTE',
    quoteId
})

export const upvoteQuote = quoteId => ({
    type: 'UPVOTE_QUOTE',
    quoteId
})

export const downvoteQuote = quoteId => ({
    type: 'DOWNVOTE_QUOTE',
    quoteId
})

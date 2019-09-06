export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote
  }
}

export const removeQuote = quoteId => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

export const upvoteQuote = (quoteId, votes) => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId,
    votes
  }
}

export const downvoteQuote = (quoteId, votes) => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId,
    votes
  }
}

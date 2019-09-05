export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote
    // quote returns {id: "ba42c3e7-6668-4eb6-b6c4-702fe549fce6", content: "q", author: "a"}
  }
}

export const removeQuote = quoteId => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

export const upvoteQuote = quoteId => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  }
}

export const downvoteQuote = quoteId => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  }
}

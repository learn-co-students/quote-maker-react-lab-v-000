// TODO: Create action creators as defined in tests

export const addQuote = (quote) => {
  return {
    type: "ADD_QUOTE",
    quote //same as quote: quote fancy ES6 shorthand syntax
  }
}

export const removeQuote = (quoteId) => {
  return {
    type: "REMOVE_QUOTE",
    quoteId
  }
}

export const upvoteQuote = (quoteId) => {
  return {
    type: "UPVOTE_QUOTE",
    quoteId
  }
}

export const downvoteQuote = (quoteId) => {
  return {
    type: "DOWNVOTE_QUOTE",
    quoteId
  }
}

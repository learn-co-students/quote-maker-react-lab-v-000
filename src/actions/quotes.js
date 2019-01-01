
export const addQuote = (quote) => {
  return {
    type: "ADD_QUOTE",
    quote
  }
}

export const removeQuote = (qId) => {
  return {
    type: "REMOVE_QUOTE",
    quoteId: qId
  }
}

export const upvoteQuote = (qId) => {
  return {
    type: "UPVOTE_QUOTE",
    quoteId: qId
  }
}

export const downvoteQuote = (qId) => {
  return {
    type: "DOWNVOTE_QUOTE",
    quoteId: qId
  }
}

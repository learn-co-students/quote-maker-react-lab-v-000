// TODO: Create action creators as defined in tests
export const addQuote = (quoteObj) => {
  return {
    type: 'ADD_QUOTE',
    quote: quoteObj
  }
}

export const removeQuote = (qidObj) => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId: qidObj
  }
}

export const upvoteQuote = (qidObj) => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId: qidObj
  }
}

export const downvoteQuote = (qidObj) => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId: qidObj
  }
}

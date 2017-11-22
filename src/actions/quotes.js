export function addQuote(quote) {
  return {
    type: 'ADD_QUOTE',
    quote: Object.assign({}, quote, { votes: 0 })
  }
}

export function removeQuote(quote) {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

export function upvoteQuote(quote) {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  }
}

export function downvoteQuote(quote) {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  }
}

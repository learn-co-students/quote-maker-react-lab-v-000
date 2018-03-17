// TODO: Create action creators as defined in tests
export function addQuote(quote){
  return {
    type: "ADD_QUOTE",
    quote: Object.assign({}, quote, { votes: 0 })
  }
}

export function removeQuote(quote){
  return {
    type: "REMOVE_QUOTE",
    quoteId: quote,
  }
}

export function upvoteQuote(quote){
  return {
    type: "UPVOTE_QUOTE",
    quoteId: quote
  }
}

export function downvoteQuote(quote){
  return {
    type: "DOWNVOTE_QUOTE",
    quoteId: quote
  }
}

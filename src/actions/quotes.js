export function addQuote(quote){
  return {
    type: "ADD_QUOTE",
    quote: quote
  }
}

export function removeQuote(quote){
  return {
    type: "REMOVE_QUOTE",
    quoteId: quote
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

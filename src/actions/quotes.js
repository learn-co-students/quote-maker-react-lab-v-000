export function addQuote(quote){
  return {
    type: 'ADD_QUOTE',
    quote: quote
  }
}

export function removeQuote(quoteId){
  return {
    type: 'REMOVE_QUOTE',
    quoteId: quoteId
  }
}

export function upvoteQuote(quoteId){
  // debugger
  return {
    type: 'UPVOTE_QUOTE',
    quoteId: quoteId
  }
}

export function downvoteQuote(quoteId){
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId: quoteId
  }
}

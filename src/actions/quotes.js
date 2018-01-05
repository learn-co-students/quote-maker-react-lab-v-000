// TODO: Create action creators as defined in tests

export function AddQuote(quote){
  return {
    type: 'ADD_QUOTE',
    quote
  }
}

export function RemoveQuote(quoteId){
  return {
    type: 'REMOVE_QUOTE',
    quoteId: quoteId
  }
}

export function upvoteQuote(quoteId){
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
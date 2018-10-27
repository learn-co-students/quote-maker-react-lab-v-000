export function addQuote(quote: {}){
  return {type: 'ADD_QUOTE', quote}
}

export function removeQuote(quoteId: Integer){
  return {type: 'REMOVE_QUOTE', quoteId: quoteId}
}

export function upvoteQuote(quoteId: Integer){
  return {type: 'UPVOTE_QUOTE', quoteId: quoteId}
}

export function downvoteQuote(quoteId: Integer){
  return {type: 'DOWNVOTE_QUOTE', quoteId: quoteId}
}


export function addQuote(quote){
  return {
    type: "ADD_QUOTE",
    payload: quote
  }
}

export function removeQuote(quoteId){
  return {
    type: "REMOVE_QUOTE",
    payload: quoteId
  }
}

export function upvoteQuote(quoteId){
  return {
    type: "UPVOTE_QUOTE",
    payload: quoteId
  }
}

export function downvoteQuote(quoteId){
  return {
    type: "DOWNVOTE_QUOTE",
    payload: quoteId
  }
}
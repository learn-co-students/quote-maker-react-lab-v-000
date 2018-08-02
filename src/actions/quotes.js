export const addQuote = quote => {
  return {
    type: "ADD_QUOTE",
    quote
  }
}

export const removeQuote = quoteId => {
  return {
    type: "REMOVE_QUOTE",
    quoteId
  }
}

export function upvoteQuote(quoteId){
  return {
    type: "UPVOTE_QUOTE",
    quoteId
  }
}

export function downvoteQuote(quoteId){
  return {
    type: "DOWNVOTE_QUOTE",
    quoteId
  }
}

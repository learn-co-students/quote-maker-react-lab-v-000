export function addQuote(quote) {
  return {
    type: "ADD_QUOTE",
    payload: quote
  }
}

export function removeQuote(quote) {
  return {
    type: "REMOVE_QUOTE",
    payload: quote
  }
}

export function upvoteQuote(quote) {
  return {
    type: "UPVOTE_QUOTE",
    payload: quote
  }
}

export function downvoteQuote(quote) {
  return {
    type: "DOWNVOTE_QUOTE",
    payload: quote
  }
}

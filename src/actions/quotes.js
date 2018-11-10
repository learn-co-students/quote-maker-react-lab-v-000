// TODO: Create action creators as defined in tests

export const upvoteQuote = (quote) => {
  return {
    type: 'UPVOTE_QUOTE', quote
  }
}

export const downvoteQuote = quote => {
  return {
    type: 'DOWNVOTE_QUOTE', quote
  }
}

export const removeQuote = quote => {
  return {
    type: 'REMOVE_QUOTE', quote
  }
}

export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE', quote
  }
}

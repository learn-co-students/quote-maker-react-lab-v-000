// TODO: Create action creators as defined in tests
export const addQuote = (quote)=>{
  return {
    quote,
    type: 'ADD_QUOTE'
  }
}

export const removeQuote=(quoteId)=>{
  return {
    quoteId,
    type: 'REMOVE_QUOTE'
  }
}

export const upvoteQuote= (quoteId)=>{
  return {
    quoteId,
    type: 'UPVOTE_QUOTE'
  }
}

export const downvoteQuote= (quoteId)=>{
  return {
    quoteId,
    type: 'DOWNVOTE_QUOTE'
  }
}

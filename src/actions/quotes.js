const addQuote = (quote) => {
  return {type: 'ADD_QUOTE', quote: quote}
}

const removeQuote = (quoteId) => {
  return {type: 'REMOVE_QUOTE', quoteId: quoteId }
}

const upvoteQuote = (quoteId) => {
  return {type: 'UPVOTE_QUOTE', quoteId: quoteId}
}

const downvoteQuote = (quoteId) => {
  return {type: 'DOWNVOTE_QUOTE', quoteId: quoteId}
}


export { addQuote, removeQuote, upvoteQuote, downvoteQuote };

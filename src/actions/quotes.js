
export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    quote
  }
}

export const removeQuote = quoteId => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}

export const upvoteQuote = quoteId => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId: quoteId
  }
}

export const downvoteQuote = quoteId => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  }
}

export const mapStateToProps = state => {
  return ({quotes: state.quotes})
}

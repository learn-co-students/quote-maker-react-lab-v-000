// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    //Why are we using assign here? seperation of concerns?
    quote: Object.assign({}, quote, { votes: 0 })
  };
};

export const removeQuote = quoteId => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  };
};

export const upvoteQuote = quoteId => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  };
};

export const downvoteQuote = quoteId => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  };
};
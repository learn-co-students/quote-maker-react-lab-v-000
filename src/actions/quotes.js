// TODO: Create action creators as defined in tests
export const addQuote = (quote: {}) => {
  return {
    type: 'ADD_QUOTE',
    quote
  };
};

export const removeQuote = (quoteId: Integer) => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  };
};

export const upvoteQuote = (quoteId: Integer) => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  };
};

export const downvoteQuote = (quoteId: Integer) => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  };
};

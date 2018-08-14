// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    quote
  };
};

  //should return an Object with a type of "REMOVE_QUOTE" and a quoteId
export const removeQuote = (quoteId) => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  };
};

//should return an Object with a type of "UPVOTE_QUOTE" and a quoteId:
export const upvoteQuote = (quoteId) => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId
  };
};

//should return an Object with a type of "DOWNVOTE_QUOTE" and a quoteId:
export const downvoteQuote = (quoteId) => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId
  };
};

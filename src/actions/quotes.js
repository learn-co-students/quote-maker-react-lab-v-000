export const addQuote = quote => {
  return {
    quote,
    type: 'ADD_QUOTE'
  };
};

export const removeQuote = quoteId => {
  return {
    quoteId: quoteId,
    type: 'REMOVE_QUOTE'
  };
};

export const upvoteQuote = quoteId => {
  return {
    quoteId: quoteId,
    type: 'UPVOTE_QUOTE'
  };
};

export const downvoteQuote = quoteId => {
  return {
    quoteId: quoteId,
    type: 'DOWNVOTE_QUOTE'
  };
};

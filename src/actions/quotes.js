export const addQuote = quote => {
  return {
    type: "ADD_QUOTE",
    quote: Object.assign({}, quote, { votes: 0 })
  };
};

export const removeQuote = quote => {
  return {
    type: "REMOVE_QUOTE",
    quoteId
  };
};

export const upvoteQuote = quote => {
  return {
    type: "UPVOTE_QUOTE",
    quoteId
  };
};

export const downvoteQuote = quote => {
  return {
    type: "DOWNVOTE_QUOTE",
    quoteId
  };
};

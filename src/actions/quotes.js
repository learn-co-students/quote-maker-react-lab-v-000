import types from "../types";

const addQuote = (quote) => ({
  type: types.ADD_QUOTE,
  quote,
});

const removeQuote = (quoteId) => ({
  type: types.REMOVE_QUOTE,
  quoteId,
});

const upvoteQuote = (quoteId) => ({
  type: types.UPVOTE_QUOTE,
  quoteId,
});

const downvoteQuote = (quoteId) => ({
  type: types.DOWNVOTE_QUOTE,
  quoteId,
});

export default { addQuote, removeQuote, upvoteQuote, downvoteQuote };

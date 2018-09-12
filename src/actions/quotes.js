// TODO: Create action creators as defined in tests
function addQuote(quote) {
  return {type: "ADD_QUOTE", quote}
}

function removeQuote(quoteId) {
  return {type: "REMOVE_QUOTE", quoteId}
}

function upvoteQuote(quoteId) {
  return {type: "UPVOTE_QUOTE", quoteId}
}

function downvoteQuote(quoteId) {
  return {type: "DOWNVOTE_QUOTE", quoteId}
}

export {addQuote,removeQuote,upvoteQuote,downvoteQuote}
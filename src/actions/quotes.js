// TODO: Create action creators as defined in tests

function addQuote(quote) {
  return {
    type: 'ADD_QUOTE',
    quote: quote
  }
}
export default addQuote;

function removeQuote(quoteId) {
  return {
    type: 'REMOVE_QUOTE',
    quoteId: quoteId
  }
}
export default removeQuote;

function upvoteQuote(quoteId) {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId: quoteId
  }
}
export default upvoteQuote;


function downvoteQuote(quoteId) {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId: quoteId
  }
}
export default downvoteQuote;

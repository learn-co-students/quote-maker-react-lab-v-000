// TODO: Create action creators as defined in tests

//
// function addQuote(quote: {}){
//   return {type: 'ADD_QUOTE', quote: {quote}}
// }
// can google template reducer/template redux prject
// where the flow is clearly described in a simple example
// -redux is meant for enterprise projects so it might
// seem like overkill but its for a good purpose
// -remember to use horizontal panes to see some of the data
// flow, from file to file. can be vertical too


export const addQuote = quote => {
  // return quote
  return {type: 'ADD_QUOTE', quote}
}


export const removeQuote = quoteId => {
  return {type: 'REMOVE_QUOTE', quoteId}
}


export const upvoteQuote = quoteId => {
  return {type: 'UPVOTE_QUOTE', quoteId}
}


export const downvoteQuote = quoteId => {
  return {type: 'DOWNVOTE_QUOTE', quoteId}
}

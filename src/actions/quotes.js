// TODO: Create action creators as defined in tests

//quote: {}
export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    quote
  }
}

//quoteId: Integer
export const removeQuote (quoteId) => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId
  }
}
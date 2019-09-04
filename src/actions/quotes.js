export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    //? is this the same as {quote: quote}
    quote
  }
}
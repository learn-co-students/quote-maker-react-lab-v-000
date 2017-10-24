

let counter = 0;

export function addQuote(quote) {
  quote.id = ++counter
  return {
    type: 'ADD_QUOTE',
    quote
  }
}

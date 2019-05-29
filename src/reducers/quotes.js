export default (state = [], action) => {
  let newState;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      //find the quote based on action.quoteId
      //remove the quote/delete it
      const idx = state.findIndex( quote => quote.id === action.quoteId)

      const quotes = [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]

      return quotes;

    case 'UPVOTE_QUOTE':
      //find the quote based on action.quoteId
      //decrease its vote count
      newState = state.map( (quote) => {
        if (quote.id === action.quoteId) {
          const newQuote = Object.assign({}, quote)
          newQuote.votes += 1
          return newQuote
        } else {
          return quote
        }
      });

      return newState;

    case  'DOWNVOTE_QUOTE':
      //find the quote based on action.quoteId
      //decrease its vote count
      newState = state.map( (quote) => {
        if (quote.id === action.quoteId) {
          const newQuote = Object.assign({}, quote)
          newQuote.votes > 0 ? newQuote.votes -= 1 : newQuote.votes
          return newQuote
        } else {
          return quote
        }
      });

      return newState;

    default:
      return state;
  }
}

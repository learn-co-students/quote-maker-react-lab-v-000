export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let upvote = state.map(quote => {
        if (quote.id === action.quoteId) {
          return { ...quote, votes: ++quote.votes }
        } else {
          return quote;
        }
      })
      return  upvote;
    case 'DOWNVOTE_QUOTE':
      let downvote = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return { ...quote, votes: --quote.votes }
        } else {
          return quote;
        }
      })
      return  downvote;
    default:
      return state;
  }
}

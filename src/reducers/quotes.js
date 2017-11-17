import uuid from 'uuid';
export default (state = [],action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(Object.assign(action.quote, {id: uuid(), votes: 0}))
    case 'REMOVE_QUOTE':
      return state.filter(quote=>quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      state.forEach((quote) => {
        if (quote.id === action.quoteId) {
          quote.votes += 1
          console.log(quote.votes)
        }
      })

      return state;
    case 'DOWNVOTE_QUOTE':
      state.forEach((quote) => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          quote.votes -= 1
          console.log(quote.votes)
        }
      })
      return state;
    default:
      return state;
  }
}

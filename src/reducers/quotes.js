export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      // return [].concat(state, action.quote)
      return [...state, action.quote]
    case 'REMOVE_QUOTE':  
      // let idx = state.indexOf(action.quoteId)
      // return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
      return state.filter(quote => quote.id !== action.quoteId)      
    case 'UPVOTE_QUOTE':      
      var idx = state.indexOf(action.quoteId)
      return state.map((quote, index) => {
        if (quote.id === action.quoteId) {
          quote.votes += 1
        }
        return quote
      })
    case 'DOWNVOTE_QUOTE':
      var idx = state.indexOf(action.quoteId)
      return state.map((quote, index) => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          quote.votes -= 1
        }
        return quote
      })
  
    default:
      return state;      
  }

}
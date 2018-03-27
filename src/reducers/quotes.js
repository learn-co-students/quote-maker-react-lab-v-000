export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
      const quote = state[quoteIndex]
      return [].concat(
        state.slice(0, quoteIndex),
        Object.assign({}, quote, {votes: quote.votes + 1}),
        state.slice(quoteIndex + 1, state.length)
        )
    case 'DOWNVOTE_QUOTE':
      const index = state.findIndex(quote => quote.id === action.quoteId)
      const quoteDown = state[index]
      
      if (quoteDown.votes > 0) {
        return [].concat(
          state.slice(0, index),
          Object.assign({}, quoteDown, {votes: quoteDown.votes - 1}),
          state.slice(index + 1, state.length)
          )
      }
      else {
        return state
      }
    default:
      return state;
  }
}
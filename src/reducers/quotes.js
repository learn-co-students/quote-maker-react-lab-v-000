export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(({id}) => id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          quote.votes = quote.votes ? quote.votes + 1 : 1
        }
        return quote
      })

    case 'DOWNVOTE_QUOTE':
    return state.map(quote => {
      if (quote.id === action.quoteId) {
        quote.votes = quote.votes ? quote.votes - 1 : 0
      }
      return quote
    })

    default: return state
  }
}
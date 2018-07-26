import uuid from 'uuid'
let quote
export default (state = [], action) => {
  const uuidId = uuid()

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      state = state.filter(function (quote) {
        return quote.id !== action.quoteId
      })
      return state

    case 'UPVOTE_QUOTE':
      quote = state.find(function (quote) {
        return quote.id === action.quoteId
      })
      quote.votes = quote.votes || 0
      quote.votes += 1
      return state
      break

    case 'DOWNVOTE_QUOTE':
      quote = state.find(function (quote) {
        return quote.id === action.quoteId
      })
      quote.votes = quote.votes || 0
      quote.votes > 0 ? quote.votes -= 1 : quote.votes = 0
      return state
      break

    default:
      return state
  }
}

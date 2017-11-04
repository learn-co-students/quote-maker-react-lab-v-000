export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let upvote = state.find(quote => quote.id === action.quoteId)
      return [Object.assign({}, upvote, { votes: ++upvote.votes })]
    case 'DOWNVOTE_QUOTE':
      let downvote = state.find(quote => quote.id === action.quoteId)
      let downvoting = (downvote.votes > 0) ? --downvote.votes : 0
      return [Object.assign({}, downvote, {votes: downvoting})]
    default:
      return state
  }
}

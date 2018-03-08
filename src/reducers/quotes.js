export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => action.quoteId !== quote.id)
    case 'UPVOTE_QUOTE':
      let upIdx = state.findIndex(q => q.id === action.quoteId)
      let upQuote = Object.assign({}, state[upIdx])
      upQuote.votes += 1
      return [].concat(state.slice(0, upIdx), upQuote, state.slice(upIdx + 1))
    case 'DOWNVOTE_QUOTE':
      let downIdx = state.findIndex(q => q.id === action.quoteId)
      let downQuote = Object.assign({}, state[downIdx])
      downQuote.votes = downQuote.votes === 0 ? 0 : downQuote.votes - 1
      return [].concat(state.slice(0, downIdx), downQuote, state.slice(downIdx + 1))
    default:
      return state;
  }
}
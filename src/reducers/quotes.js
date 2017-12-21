export default (state = [], action) => {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      console.log('logging state from redux', state)
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      let upvotedQuote = state[idx]
      return [...state.slice(0, idx), Object.assign({}, upvotedQuote, { votes: upvotedQuote.votes += 1 }), ...state.slice(idx+1, state.length)]
    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id === action.quoteId)
      let downvotedQuote= state[idx]
      if (downvotedQuote.votes > 0) {
        return [...state.slice(0, idx), Object.assign({}, downvotedQuote, { votes: downvotedQuote.votes -= 1 }), ...state.slice(idx+1, state.length)]
      } else {
        return state
      }
    default:
      return state
  }
}

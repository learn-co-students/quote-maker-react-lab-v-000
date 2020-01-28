export default (state = [], action) => {
  let idx;
  switch(action.type) {
    case 'ADD_QUOTE':
      const quote = {...action.quote};
      return [...state, quote];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      const upvotedQuote = {...state[idx], votes: state[idx].votes + 1 }
      return [...state.slice(0,idx), upvotedQuote, ...state.slice(idx + 1)]
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      if (state[idx].votes > 0) {
        const downvotedQuote = {...state[idx], votes: state[idx].votes - 1 }
        return [...state.slice(0,idx), downvotedQuote, ...state.slice(idx + 1)]
      } else {
        return state;
      }
    default:
      return state;
  }
}

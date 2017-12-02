
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
      break;
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id!==action.quoteId)
    case 'UPVOTE_QUOTE':
      let idx1 = state.findIndex(quote => quote.id === action.quoteId)
      let quote1 = state[idx1]
      return [...state.slice(0, idx1),
      {...quote1, votes: quote1.votes +=1},
    ...state.slice(idx1+1)]
    case 'DOWNVOTE_QUOTE':
      let idx2 = state.findIndex(quote => quote.id === action.quoteId)
      let quote2 = state[idx2]
      if (quote2.votes > 0) {
        return [...state.slice(0, idx2),
        {...quote2, votes: quote2.votes -=1},
        ...state.slice(idx2+1)]
      }
      return state
      break;
    default:
      return state;
  }
}

export default (state = [], action) => {

  let idx;
  let updatedQuote;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      updatedQuote = state.find(quote => quote.id === action.quoteId)
      idx = state.indexOf(updatedQuote)

      ++updatedQuote.votes
      return [...state.splice(idx, 1, updatedQuote)]

    case 'DOWNVOTE_QUOTE':
      updatedQuote = state.find(quote => quote.id === action.quoteId)
      idx = state.indexOf(updatedQuote)
      if (updatedQuote.votes > 0){
        return [...state.splice(idx, 1, Object.assign(updatedQuote, {votes: --updatedQuote.votes}))]
      }
      return state;

    default:
      return state;

  }
}

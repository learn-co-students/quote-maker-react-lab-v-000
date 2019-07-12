export default (state = [], action) => {
  let index, quote, newQuote, newState
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      index = state.findIndex(i => i.id === action.quoteId)
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case 'UPVOTE_QUOTE':
      index = state.findIndex(i => i.id === action.quoteId)
      quote = state.find(quote => quote.id === action.quoteId)
      newQuote = {...quote, votes: quote.votes + 1}
      newState = [...state]
      newState.splice(index, 1, newQuote)
      return newState
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(i => i.id === action.quoteId)
      quote = state.find(quote => quote.id === action.quoteId)

      if(quote.votes === 0){
        return [...state]
      } else {
        newQuote = {...quote, votes: quote.votes - 1}
        newState = [...state]
        newState.splice(index, 1, newQuote)
        return newState
      }
    default:
      return state;
  }
}

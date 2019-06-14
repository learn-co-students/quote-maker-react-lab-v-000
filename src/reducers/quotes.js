
function quoteReducer(state = [], action){
  let index = 0;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      index;
      return [...state.slice(0, index),
      ...state.slice(index + 1)]

    case "UPVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId)
      let upQuote = state[index]
      return [...state.slice(0, index),
      Object.assign({}, upQuote, {votes: upQuote.votes + 1}),
      ...state.slice(index + 1)]

    case "DOWNVOTE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId)
      let downQuote = state[index]
      if (downQuote.votes <= 0){
        return [...state]
      }
      else{
        return [...state.slice(0, index),
        Object.assign({}, downQuote, {votes: downQuote.votes - 1}),
        ...state.slice(index + 1)]
      }
    default:
      return state;
  }
}

export default quoteReducer

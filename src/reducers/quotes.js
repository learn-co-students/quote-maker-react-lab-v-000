export default function quotesApp(state = [], action) {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      const up_quote = state.find(quote => quote.id === action.quoteId)
      up_quote.votes += 1
      const up_state = state.filter(quote => quote.id !== action.quoteId)
      return [...up_state, up_quote]

    case "DOWNVOTE_QUOTE":
      const down_quote = state.find(quote => quote.id === action.quoteId)
        if (down_quote.votes > 0) {
          down_quote.votes -= 1
        }
      const down_state = state.filter(quote => quote.id !== action.quoteId)
      return [...down_state, down_quote]

    default:
      return state;
  }
}

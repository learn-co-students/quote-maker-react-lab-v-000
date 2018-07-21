export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      const i = state.findIndex(quote => quote.id === action.quoteId)
      const quoteUp = state[i]
      return [
        ...state.slice(0, i),
        Object.assign({}, quoteUp, {votes: quoteUp.votes += 1}),
        ...state.slice(i + 1)
      ]

    case 'DOWNVOTE_QUOTE':
      const idx = state.findIndex(quote => quote.id === action.quoteId)
      const quoteDown = state[idx]
      if (quoteDown.votes > 0) {
        return [
          ...state.slice(0, idx),
          Object.assign({}, quoteDown, {votes: quoteDown.votes -= 1}),
          ...state.slice(idx + 1)
        ]
      } else {
        return state
      }

    default:
      return state;
  }
}

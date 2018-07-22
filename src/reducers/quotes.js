
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat({
        author: action.quote.author,
        content: action.quote.content,
        id: action.quote.id,
        votes: 0
      })
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const i = state.findIndex((q) => q.id === action.quoteId)
      const updatedQuote = state[i]
      return [
        ...state.slice(0, i), Object.assign({}, updatedQuote, (updatedQuote.votes += 1)), ...state.slice(i +1)
      ]
    case 'DOWNVOTE_QUOTE':
      const x = state.findIndex((q) => q.id === action.quoteId)
      const updatedQuote2 = state[x]
      if(updatedQuote2.votes === 0) {
        return state
      } else {
      return [...state.slice(0,x), Object.assign({}, updatedQuote2, (updatedQuote2.votes -= 1)), ...state.slice(x+1)]  
      }
      default:
        return state;
  }
}
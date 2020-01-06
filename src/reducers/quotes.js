import uuid from "uuid";

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state,
        {
          author: action.quote.author,
          content: action.quote.content,
          votes: action.quote.votes || 0,
          id: action.quote.id || uuid()
        }
      ];
    
    case 'REMOVE_QUOTE':
      let idx = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    
    case 'UPVOTE_QUOTE':
      return state.map((quote, idx) => {
        if (quote.id === action.quoteId) {
          return {
            ...quote,
            votes: state[idx].votes + 1
          }
        }
        return quote;
      })
    
    case 'DOWNVOTE_QUOTE':
      return state.map((quote, idx) => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return {
            ...quote,
            votes: state[idx].votes - 1
          }
        }
        return quote;
      })
    
    default:
      return state;
  }
}

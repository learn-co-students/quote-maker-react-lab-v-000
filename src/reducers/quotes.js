let idx;
let quote;
export default function manageQuotes(state = [], action){
  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter((q) => q.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(q => q.id === action.quoteId )
      quote = state[idx]
      quote.votes++
      return [...state.slice(0, idx), quote, ...state.slice(idx+1)]

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(q => q.id === action.quoteId )
      quote = state[idx]
      if (quote.votes > 0) (quote.votes--)
      return [...state.slice(0, idx), quote, ...state.slice(idx+1)]

    default:
      return state;
  }
};

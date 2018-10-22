export default function reducer(state = [], action) {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      const upvoteIdx = state.findIndex(quote => quote.id === action.quoteId);
      const upvoteQuote = state[upvoteIdx];
      return [
        ...state.slice(0, upvoteIdx),
        Object.assign({}, upvoteQuote, {votes: upvoteQuote.votes += 1}),
        ...state.slice(upvoteIdx +1)
      ]

    case 'DOWNVOTE_QUOTE':
      const downvoteIdx = state.findIndex(quote => quote.id === action.quoteId);
      const downvoteQuote = state[downvoteIdx];
      if (downvoteQuote.votes > 0) {
        return [
          ...state.slice(0, downvoteIdx),
          Object.assign({}, downvoteQuote, {votes: downvoteQuote.votes -= 1}),
          ...state.slice(downvoteIdx +1)
        ]
      }

    default:
      return state;
  }
}

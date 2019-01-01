export default (state = [], action) => {
  let quote;
  let index;
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      index = state.findIndex(q => q.id === action.quoteId);
      quote = state[index];
      return [
        ...state.slice(0, index),
        {...quote, votes: quote.votes += 1 },
        ...state.slice(index + 1)
      ];
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(q => q.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          {...quote, votes: quote.votes -= 1 },
          ...state.slice(index + 1)
        ];
      }

    return state;
    default: return state;
  }
}
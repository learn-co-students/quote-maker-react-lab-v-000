// quote reducers

export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId);
    case 'UPVOTE_QUOTE':
      let upvoteIndex = state.findIndex(q => q.id === action.quoteId);
      let upvoteQuote = state[upvoteIndex];
      return [...state.slice(0, upvoteIndex),
        Object.assign({}, upvoteQuote, { votes: upvoteQuote.votes += 1 }),
        ...state.slice(upvoteIndex+1)];
    case 'DOWNVOTE_QUOTE':
      let downvoteIndex = state.findIndex(q => q.id === action.quoteId);
      let downvoteQuote = state[downvoteIndex];
      if (downvoteQuote.votes > 0) {
        return [...state.slice(0, downvoteIndex),
          Object.assign({}, downvoteQuote, { votes: downvoteQuote.votes -= 1 }),
          ...state.slice(downvoteIndex+1)];
      }
      return state;
    default:
      return state;
  }
}

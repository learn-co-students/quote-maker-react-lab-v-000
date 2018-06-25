export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      const removalInd = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, removalInd),
      ...state.slice(removalInd + 1)];
    case 'UPVOTE_QUOTE':
      const upvoteInd = state.findIndex(quote => quote.id === action.quoteId);
      const upvoteQuote = state[upvoteInd];
      return [
        ...state.slice(0, upvoteInd),
        Object.assign({}, upvoteQuote, {votes: upvoteQuote.votes += 1}),
      ...state.slice(upvoteInd + 1)];
    case 'DOWNVOTE_QUOTE':
      const downvoteInd = state.findIndex(quote => quote.id === action.quoteId);
      const downvoteQuote = state[downvoteInd];
      if (downvoteQuote.votes > 0) {
        return [
        ...state.slice(0, downvoteInd),
        Object.assign({}, downvoteQuote, {votes: downvoteQuote.votes -= 1}),
      ...state.slice(downvoteInd + 1)];
    }
    default:
      return state;
  }
}

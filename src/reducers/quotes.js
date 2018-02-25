export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote);

    case 'REMOVE_QUOTE':
      let index = state.indexOf(action.quoteId);

      return [].concat(state.slice(0, index), state.slice(index + 1, state.length));

    case 'UPVOTE_QUOTE':
      let idx = state.indexOf(action.quoteId);
      let quote = state[idx];

      return [
        ...state.slice(0, idx),
        Object.assign({}, quote, {votes: quote.votes + 1}),
        ...state.slice(idx + 1)
      ]

    case 'DOWNVOTE_QUOTE':
      let i = state.indexOf(action.quoteId);
      let q = state[i];

      return [
        ...state.slice(0, idx),
        Object.assign({}, q, {votes: q.votes - 1}),
        ...state.slice(idx + 1)
      ]

    default:
      return state;
  }
}

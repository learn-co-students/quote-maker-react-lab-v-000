export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE': {
      let idx = state.findIndex(quote => action.quoteId === quote.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    }

    case 'UPVOTE_QUOTE': {
      let idx = state.findIndex(quote => action.quoteId === quote.id);
      let quote = state[idx];
      quote.votes += 1;

      return [...state.slice(0, idx), quote, ...state.slice(idx + 1)];
    }

    case 'DOWNVOTE_QUOTE': {
      let idx = state.findIndex(quote => action.quoteId === quote.id);
      let prevVotes = state[idx].votes;
      let newState = state[idx];
      newState.votes = !prevVotes < 1 ? prevVotes - 1 : prevVotes;
      return [...state.slice(0, idx), newState, ...state.slice(idx + 1)];
    }

    default:
      return state;
  }
}

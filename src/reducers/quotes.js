
export default function manageQuotes(state = [], action) {
  switch (action.type) {

    case 'ADD_QUOTE':
      return state.concat({...action.quote});
    case 'REMOVE_QUOTE':
      let i = state.findIndex(q => q.id === action.quoteId);
      return [].concat(state.slice(0, i), state.slice(i + 1, state.length));
    case 'UPVOTE_QUOTE':
      let x = state.findIndex(q => q.id === action.quoteId);
      return [].concat(state.slice(0, x), {...state[x], votes: state[x].votes + 1}, state.slice(x + 1, state.length))
    case 'DOWNVOTE_QUOTE':
      let z = state.findIndex(q => q.id === action.quoteId);
      if (state[z].votes > 0) {
        return [].concat(state.slice(0, z), {...state[z], votes: state[z].votes - 1}, state.slice(z + 1, state.length))
      }
      else {
        return state;
      }

    default:
      return state;

  }
}

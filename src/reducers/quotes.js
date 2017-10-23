import cuid from 'cuid';
export const cuidFn = cuid;

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote)
    case 'REMOVE_QUOTE':
      let idx = state.indexOf(action.quoteId);
      return [ ...state.slice(idx)];
    case 'UPVOTE_QUOTE':
      idx = state.indexOf(action.quoteId);
      state[idx+1].votes+=1;
      return state;
    case 'DOWNVOTE_QUOTE':
      idx = state.indexOf(action.quoteId);
      if (state[idx+1].votes!=0) {
        state[idx+1].votes-=1;
      }
      return state;
    default:
      return state;
  }
}

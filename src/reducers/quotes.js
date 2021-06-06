export default (state = [], action) => {
  let idx;
  let item;

  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      state = state.filter(item => item.id !== action.quoteId)
      return state;

    case 'UPVOTE_QUOTE':
      idx = state.findIndex(el => el.id === action.quoteId)
      item = state[idx]

      state = [
        ...state.slice(0, idx),
        Object.assign({}, item, { votes: item.votes += 1 }),
        ...state.slice(idx + 1)
      ]
      return state;

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(el => el.id === action.quoteId)
      item = state[idx]

      state = [
        ...state.slice(0, idx),
        Object.assign({}, item, { votes: item.votes === 0 ? 0 : item.votes -= 1 }),
        ...state.slice(idx + 1)
      ]
      return state;

    default:
      return state;
  }
}
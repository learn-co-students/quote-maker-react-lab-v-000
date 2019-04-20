import uuid from 'uuid';

export default (state = [], action) => {
  let idx
  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      idx = state.indexOf(action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case 'UPVOTE_QUOTE':
      idx = state.indexOf(action.id)
      state[idx].vote += 1
      return state

    case 'DOWNVOTE_QUOTE':
      idx = state.indexOf(action.id)
      state[idx].vote -= 1
      return state

    default:
      return state;

  }
}

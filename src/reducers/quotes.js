export default (state = [], action) => {
  let idx
  let idArray
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      idArray = state.map(s => s.id)
      idx = idArray.indexOf(action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)]


    // return state
    case 'UPVOTE_QUOTE':
      return state
    case 'DOWNVOTE_QUOTE':
      return state

    default:
      return state
  };
}

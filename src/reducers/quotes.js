export default (state = [], action) => {
  let idx
  let selectedActionArray
  selectedActionArray = state.map(s => s.id)
  idx = selectedActionArray.indexOf(action.quoteId)
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    case 'UPVOTE_QUOTE':
      return [
        ...state.slice(0, idx),
        { ...state[idx], votes: state[idx].votes + 1 },
        ...state.slice(idx + 1)
      ]

    case 'DOWNVOTE_QUOTE':
      return [
        ...state.slice(0, idx),
        { ...state[idx], votes: (state[idx].votes > 0 ? state[idx].votes - 1 : 0) },
        ...state.slice(idx + 1)
      ]
    default:
      return state
  }
}

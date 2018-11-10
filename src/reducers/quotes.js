export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return [...state.slice(0, action.id), ...state.slice(action.id+1)]
    case 'UPVOTE_QUOTE':
      return action.quote.votes + 1
    case 'DOWNVOTE_QUOTE':
      return action.quote.votes - 1
    default:
      return state
  }
}

//action = {type: 'ADD_QUOTE', action.quote}

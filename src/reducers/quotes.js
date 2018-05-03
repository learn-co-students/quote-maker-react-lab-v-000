// import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":

      return [].concat(state, action.payload.quote)
    case "REMOVE_QUOTE":
      let idx = state.indexOf(action.payload)
      return [].concat(state.slice(0, idx), state.slice(idx + 1))
    case "UPVOTE_QUOTE":
      const upvoted = {...action.payload, votes: action.payload.votes++}
      return {...state, upvoted}
    case "DOWNVOTE_QUOTE":
      const downvoted = {...action.payload, votes: action.payload.votes--}
      return {...state, downvoted}

    default:
      return state;

  }
}

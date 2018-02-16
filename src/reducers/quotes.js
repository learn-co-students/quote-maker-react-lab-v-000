import uuid from 'uuid';
 
const id = uuid();

export function quotes(state = [], action){
  switch (action.type) {
  case "ADD_QUOTE":
    return [].concat(state, action.payload)
  case "REMOVE_QUOTE":
    let idx = state.indexOf(action.payload)
    return [].concat(state.slice(0, idx), state.slice(idx + 1, state.length))
  case "UPVOTE_QUOTE":
    return [].concat(state, action.payload)
  case "DOWNVOTE_QUOTE":
    return [].concat(state, action.payload)
  default:
    return state
  }
}
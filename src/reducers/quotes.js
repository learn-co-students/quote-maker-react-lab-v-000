export default(state = [], action) => {  
    switch (action.type) {
  case "ADD_QUOTE":
      debugger;
    return this.state.concat(action.quote)
  case "REMOVE_QUOTE":
    let idx = state.indexOf(action.quote)
    return this.state.concat(state.slice(0, idx), state.slice(idx + 1, state.length))
  case "UPVOTE_QUOTE":
    return {votes: state.votes.length + 1}
  case "DOWNVOTE_QUOTE": 
    return {votes: state.votes.length - 1}
  default:
    return state
  }
}
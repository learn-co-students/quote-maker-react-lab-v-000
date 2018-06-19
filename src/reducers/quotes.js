export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [].concat(state, action.payload);
    case "REMOVE_QUOTE":
      let idx = state.indexOf(action.payload);
      return [].concat(state.slice(0, idx), state.slice(idx+1, state.length))
    default:
      return state;
  }
  
}
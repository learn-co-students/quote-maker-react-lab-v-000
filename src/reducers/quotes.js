export default (state = [], action) => {
    switch (action.type) {
      case "ADD_QUOTE":
        return state.concat([action.quote])
      default:
        return state;
    }
}
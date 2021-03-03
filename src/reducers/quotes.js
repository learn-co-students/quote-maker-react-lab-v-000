export default (state = [], action) => {
  // console.log("from reducer", state);
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return;
    default:
      return state;
  }
};

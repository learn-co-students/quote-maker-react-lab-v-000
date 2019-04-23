export default (state = [], action) => {
  let index;
  switch (action.type) {
    case "ADD_QUOTE":
      return state;

    case "REMOVE_QUOTE":
      return state;

    case "UPVOTE_QUOTE":
      return state;

    case "DOWNVOTE_QUOTE":
      return state;

    default:
      return state;
  }
}

export default (state = [], action) => {
  let quoteIndex = state.findIndex(quote => quote.id === action.quoteId);
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat([action.quote])
    case "REMOVE_QUOTE":
      return [...state.slice(0, quoteIndex), ...state.slice(quoteIndex + 1)];
    case "UPVOTE_QUOTE":
      return [...state.slice(0, quoteIndex), {...state[quoteIndex], votes: state[quoteIndex].votes += 1}, ...state.slice(quoteIndex + 1)];
    case "DOWNVOTE_QUOTE":
      if (state[quoteIndex].votes == 0) {
        return state
      } else { 
        return [...state.slice(0, quoteIndex),
          {...state[quoteIndex], votes: state[quoteIndex].votes -= 1},
          ...state.slice(quoteIndex + 1)];
      }
    default:
      return state;
  }
}

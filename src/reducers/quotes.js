export default (state = [], action) => {
  let clonedState;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => {
        return quote.id !== action.quoteId;
      })
    case "UPVOTE_QUOTE":
      clonedState = [...state];
      let quoteToBeUpvoted = clonedState.find(quote => quote.id === action.quoteId);
      quoteToBeUpvoted.votes += 1; //changes internal value of the clonedObj
      return clonedState;
    case "DOWNVOTE_QUOTE":
      clonedState = [...state];
      let quoteToBeDownvoted = clonedState.find(quote => quote.id === action.quoteId);
      if (quoteToBeDownvoted.votes > 0) {
        quoteToBeDownvoted.votes -= 1; //changes internal value of the clonedObj
      }
      return clonedState;
    default:
      return state;
  }
}

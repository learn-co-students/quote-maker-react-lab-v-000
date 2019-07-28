export default (state = [], action) => {

  switch (action.type) {

    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      return [state.vote + 1, action.quoteId]

    case "DOWNVOTE_QUOTE":
      return [state.vote - 1, action.quoteId]

  default:
    return state;
  }
}

export default (state = [], action) => {
  switch (action.type) {

    case "ADD_QUOTE":
      return [].concat(state, action.quote)

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      let foundUp = state.find(quote => quote.id === action.quoteId);
      let idxUp = state.indexOf(foundUp);
      let quoteUp = state[idxUp];
      console.log({...quoteUp, votes: ++quoteUp.votes})
      return [].concat(state.slice(0, idxUp), {...quoteUp, votes: quoteUp.votes++}, state.slice(idxUp+1));

    case "DOWNVOTE_QUOTE":
      let foundDown = state.find(quote => quote.id === action.quoteId);
      if (foundDown.votes > 0) {
        let idxDown = state.indexOf(foundDown);
        let quoteDown = state[idxDown];
        console.log({...quoteDown, votes: --quoteDown.votes})
        return [].concat(state.slice(0, idxDown), {...quoteDown, votes: quoteDown.votes++}, state.slice(idxDown+1));
      } else {
        return state;
      }
    default:
      return state;

  }
}

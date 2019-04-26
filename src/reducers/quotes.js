export default (state = [], action) => {
  let selectedQuote;
  switch(action.type) {
    case "ADD_QUOTE":
    return [...state, action.quote];

    case "REMOVE_QUOTE":
    return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
    selectedQuote = state.filter(quote => quote.id === action.quoteId);
    selectedQuote[0].votes += 1;
    state = state.filter(quote => quote.id !== action.quoteId);
    return state.concat(selectedQuote);

    case "DOWNVOTE_QUOTE":
    selectedQuote = state.filter(quote => quote.id === action.quoteId);
    if ( selectedQuote[0].votes > 0 ){
     selectedQuote[0].votes -= 1;
     state = state.filter(quote => quote.id !== action.quoteId);
     return state.concat(selectedQuote);
    } else {
      return state;
    }

    default:
    return state;
  }
}

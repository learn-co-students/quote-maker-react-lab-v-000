export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      return state.filter( quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      let upQuote = state.find(quote => quote.id === action.quoteId);
      upQuote.votes++
      const allOthers = state.filter(quote => quote.id !== action.quoteId);
      allOthers.push(upQuote)
      return allOthers;
    case 'DOWNVOTE_QUOTE':
      let quote = state.find( quote => quote.id === action.quoteId)
      if (quote.votes > 0){quote.votes-- }
      let mehAllOthers = state.filter( quote => quote.id !== action.quoteId);
      mehAllOthers.push(quote);
      return mehAllOthers

    default:
      return state
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [].concat(state, action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quete => quete.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const uQuotes = state.map((quote) => {
        if(quote.id === action.quoteId){
          return Object.assign({}, quote, { votes: quote.votes += 1 });
        }else{
          return quote;
        }
      })
      return uQuotes;
    case 'DOWNVOTE_QUOTE':
      const dQuotes = state.map((quote) => {
        if(quote.votes > 0 && quote.id === action.quoteId){
          return Object.assign({}, quote, { votes: quote.votes -= 1 });
        }else{
          return quote;
        }
      })
      return dQuotes;
    default:
      return state;
  }
}
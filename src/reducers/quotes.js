export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return [].concat(state, action.quote);

    case 'REMOVE_QUOTE':
      return [].concat(state.filter(quote => quote.id !== action.quoteId));

    case 'UPVOTE_QUOTE':
      return [].concat(state.map(quote => {
        if (quote.id === action.quoteId){
          return {...quote, votes: quote.votes += 1}
        } else {
          return quote
        }
      }));

    case 'DOWNVOTE_QUOTE':
      return [].concat(state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0){
          return {...quote, votes: quote.votes -= 1}
        } else {
          return quote
        }
      }));

    default:
      return state;
  }
}

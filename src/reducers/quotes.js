export default (state = [], action) => {
  switch(action.type){
    case "ADD_QUOTE":
      return state.concat(action.quote);
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      return state.map(quote => {
        if(quote.id === action.quoteId){
          return {...quote, votes: ++quote.votes};
        } else {
          return quote;
        }
      })
    case "DOWNVOTE_QUOTE":
    return state.map(quote => {
      if(quote.id === action.quoteId){
        return {...quote, votes: quote.votes > 0 ? --quote.votes : 0};
      } else {
        return quote;
      }
    })      
    default:  
      return state;
  }
}
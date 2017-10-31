import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type){
  case "ADD_QUOTE":
    let quote = Object.assign({}, {id: uuid(), votes: 0}, action.quote);
    return state.concat(quote);
  case "REMOVE_QUOTE":
    return state.filter(quote=>quote.id!==action.quoteId);
  case "UPVOTE_QUOTE":
    return state.map((quote)=>{
      if(quote.id===action.quoteId){
        return Object.assign({}, quote, {votes: quote.votes+1})
      }
      return quote;
    });
  case "DOWNVOTE_QUOTE":
    return state.map((quote)=>{
      if(quote.id===action.quoteId && quote.votes > 0){
        return Object.assign({}, quote, {votes: quote.votes-1})
      }
      return quote;
    });
  default:
    return state;
  }
}

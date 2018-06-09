export default (state = [], action)=> {
  let quotes;
  switch (action.type) {
    case 'ADD_QUOTE':
      let quote = Object.assign({}, action.quote, {votes: 0})
      quotes = state.concat(quote);
      return quotes
    case 'REMOVE_QUOTE':
      quotes = state.filter(quote=> quote.id !==action.quoteId)
      return quotes;  
    case 'UPVOTE_QUOTE':
      quotes = state.map(quote=>{
        if (quote.id === action.quoteId){
          quote.votes += 1
        }
        return quote
      })
      return quotes
    case 'DOWNVOTE_QUOTE':
      // let quote = state.find(q=> q.id === quote.id)
      quotes = state.map(quote=>{
        if (quote.id === action.quoteId){
          quote.votes > 0 ? quote.votes -= 1 : quote.votes = 0 
        } 
        return quote       
      })
      return quotes;   
    default:  
     return state;
  }
}
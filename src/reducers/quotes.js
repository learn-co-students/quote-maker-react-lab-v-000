export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const newState1 = [...state]
      newState1.forEach(function(quote){
        if(quote.id === action.quoteId){
          quote.votes++
        }
      })
      return newState1;
    case 'DOWNVOTE_QUOTE':
      const newState2 = [...state]
      newState2.forEach(function(quote){
        if(quote.id === action.quoteId && quote.votes > 0){
          quote.votes--
        }
      })
      return newState2;
    default:
      return state;
  }
  return state;
}

export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => action.quoteId !== quote.id)
    case 'UPVOTE_QUOTE':
      return state.map(quote => {
        if(action.quoteId === quote.id){
          quote.votes += 1
        }
        return quote
      })
      case 'DOWNVOTE_QUOTE':
        return state.map(quote => {
          if(action.quoteId === quote.id && quote.votes > 0){
            quote.votes -= 1
          }
          return quote
        })
  default:
    return state;
  }
}

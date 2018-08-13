export default (state = [], action) => {
  let index
  let updatedState

  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      updatedState = state.map(quote => {
        if(quote.id === action.quoteId){
          return {...quote, votes: ++quote.votes}
        }
      })
      return updatedState

      case 'DOWNVOTE_QUOTE':
        updatedState = state.map(quote => {
          if(quote.id === action.quoteId && quote.votes > 0){
            return {...quote, votes: --quote.votes}
          }
          else{
          return quote
          }
        })
        return updatedState

    default:
      return state;
  }
}

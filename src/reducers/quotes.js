

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return state.concat([action.quote])
      //return action.quote
      //return state.push(action.quote) ;
    case 'REMOVE_QUOTE':
      const newState = state.filter((quote) => quote.id !== action.quoteId)
      return newState
     case 'UPVOTE_QUOTE':
       // const index = state.findIndex((quote) => quote.id === action.quoteId)
       // const thing = state[index]
       //
       // return [...state.slice(0, index),
       // Object.assign({}, thing, {votes: thing.votes += 1}),
       // ...state.slice(index+1)]
       const quotes = state.map((quote) =>{
         if (quote.id === action.quoteId){
          return  Object.assign({}, quote, {votes: quote.votes += 1})
         } else {
           return quote
         }
       })
       return quotes
      case 'DOWNVOTE_QUOTE':
        const quotes1 = state.map((quote) =>{
          if (quote.id === action.quoteId && quote.votes > 0){
           return  Object.assign({}, quote, {votes: quote.votes -= 1})
          } else {
            return quote
          }
        })
        return quotes1
    default:
      return state;
  }
}
// state.push(action.quote) ;

export default (state = [], action) => {
  let quote;
  let index;

  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      console.log(action.quoteId)

      quote = state.find(quote => quote.id === action.quoteId)
      index = state.indexOf(quote)
      return [...state.slice(0,index),{...quote, votes: quote.votes+= 1},...state.slice(index+1)]
    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId)
      index = state.indexOf(quote)
      return quote.votes > 0 ? [...state.slice(0,index),{...quote, votes: quote.votes-= 1},...state.slice(index+1)] : state
    default:
      return state
  }
}

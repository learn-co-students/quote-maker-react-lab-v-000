export default (state = [], action) => {
/**
export default (state = {
  quotes: []
}, action) => {
  //return state; **/

//let index;
let quote;

  switch (action.type) {

    case 'ADD_QUOTE':
      //return state.concat(action.quote);
      return [...state,action.quote]

    case 'REMOVE_QUOTE':
      let id = action.quoteId
      return state.filter(quote => quote.id !== id)

    case 'UPVOTE_QUOTE':
      //let quote = state.filter(quote => quote.id === action.quoteId)
      quote = state.find(quote => quote.id === action.quoteId)
      quote.votes += 1
      return [quote]

      case 'DOWNVOTE_QUOTE':
        //let quote = state.filter(quote => quote.id === action.quoteId)
        quote = state.find(quote => quote.id === action.quoteId)
        if (quote.votes > 0) {
          quote.votes -= 1
        }

        return [quote]



    default:
      return state;

  }


}

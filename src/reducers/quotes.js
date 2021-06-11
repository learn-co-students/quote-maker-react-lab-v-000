export default (state = [], action) => {
  let idx;
  let quote;
//  console.log(action)
//  console.log(state)
  switch(action.type){
        case "ADD_QUOTE":
          return[...state, action.quote]

        case "REMOVE_QUOTE":
          // idx = state.findIndex( q => q.id === action.quoteId)
          // return [...state.slice(0,idx),...state(idx+1)]
          return state.filter(quote => quote.id !== action.quoteId);

        case "UPVOTE_QUOTE":
          quote = state.find( q => q.id === action.quoteId)
          quote.votes += 1
          return[...state]
          

        case "DOWNVOTE_QUOTE":
          quote = state.find( q => q.id === action.quoteId)
          if (quote.votes > 0) {
                quote.votes -= 1
                return[...state]
          }      

        default:
              return state;
  } 
}

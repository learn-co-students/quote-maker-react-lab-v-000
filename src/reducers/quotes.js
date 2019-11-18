import { debug, debuglog } from "util";
import { upvoteQuote } from "../actions/quotes";

// import uuid from 'uuid'
  // N0te:    Store combines all the different state.

export default (state = [], action) => {

  switch (action.type) {

  
    case 'ADD_QUOTE':
      return state.concat(action.quote)
  
    
    case 'REMOVE_QUOTE':
    

      return state.filter(quote => quote.id !== action.quoteId)
      

    case 'UPVOTE_QUOTE':
      // console.log('UPVOTE', action)
      // console.log("state", state)

      let findQuote = state.find(quote => quote.id === action.quoteId)
      
           // console.log(findQuote)
  
   findQuote.votes += 1
     debugger
  
         return state
      
    case 'DOWNVOTE_QUOTE':
  
  let getQuote = state.find(quote => quote.id === action.quoteId)
     
      if (getQuote.votes > 0) {
        getQuote.votes -= 1 
         }
      return state
    
    

    default:
      return state;
  }
}
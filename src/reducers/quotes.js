import { debug, debuglog } from "util";
import { upvoteQuote } from "../actions/quotes";

// import uuid from 'uuid'

export default (state = [], action) => {

  switch (action.type) {

  
    case 'ADD_QUOTE':
      return state.concat(action.quote)
  
    
    case 'REMOVE_QUOTE':
      // state.concat(action.quote)
      // console.log(state, )

      return state.filter(quote => quote.id !== action.quoteId)
      

    case 'UPVOTE_QUOTE':
      console.log('UPVOTE', action)
      console.log("state", state)

      let findQuote = state.find(quote => quote.id === action.quoteId)
      
  console.log(findQuote)
  
   findQuote.votes += 1
     
  
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
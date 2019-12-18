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
      //   An alternative way to do the below.
  //     let quoteIndex = state.findIndex(quote => quote.id === action.quoteId)
  //     let quote = state[quoteIndex]
      
  //     return [
     
  //       ...state.slice(0, quoteIndex),
  //       Object.assign({}, quote, { votes: quote.votes += 1 }),
  //       ...state.slice(quoteIndex + 1 )

  //  ]
           let findQuote = state.find(quote => quote.id === action.quoteId)
   findQuote.votes += 1
    //  debugger
  
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
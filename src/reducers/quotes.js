import { debug, debuglog } from "util";

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
      console.log(state, action)

      // state.concat(action.quote)
      // return state.map(firstObject => (((firstObject.vote) + 1))
     return state.map(firstObject => firstObject) 
             
        
         
      
    case 'DOWNVOTE_QUOTE':
  

      state.concat(action.quote - 2)

    default:
      return state;
  }
}
// import {addQuote} from '../actions/quotes'


const quotes = (state = [], action) => {
  let index;
  let quote;

  switch(action.type){
   case 'ADD_QUOTE':
     return state.concat(action.quote)
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId) 
    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      //find the INDEX of the quote that's getting UpVoted => return INDEX of quote
      quote = state[index]
      // quote is the quote that's found in the last index variable

      return [
        ...state.slice(0, index),
        //return ALL past state, return a new array with every element up to but not including quote
        Object.assign({}, quote, {votes: quote.votes += 1}),
        //create a copy of soruce object (quote), 
        //create a new key/value pair votes: set to whatever the value of quote.votes is + 1
        ...state.slice(index + 1)
        //return previous state following index var objs 
      ]
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]

      if(quote.votes > 0){
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, {votes: quote.votes -= 1}),
        ...state.slice(index + 1)
        
      ]
    }
    return state
    
  default: 
  return state; 
  }
}

export default quotes


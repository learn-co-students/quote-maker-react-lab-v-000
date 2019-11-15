import quotes from "../reducers/quotes"

// TODO: Create action creators as defined in tests
export const removeQuote = quoteId => {
    return {
      type: 'REMOVE_QUOTE',
    
        
        //  use a filter here. 
        quoteId

    }
  }
  
  export const upvoteQuote = quoteId => {
    return {
        type: 'UPVOTE_QUOTE',
       quoteId
      // quote: Object.assign({}, quote, { votes: 0 + 1 })

  
    }
  }
  
  export const downvoteQuote = quoteId => {
      return {
        type: 'DOWNVOTE_QUOTE',
        quoteId  
        // quote: Object.assign({}, quote, { votes: 0  - 1})

    }
  }

  export const addQuote = quote=> {
    return {
      type: 'ADD_QUOTE',
        
         quote: Object.assign({}, quote, { votes: 0 })
    }
      
     
  }
//  Notificati  Create all the actions.
// export const removeQuote
  



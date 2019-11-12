
// TODO: Create action creators as defined in tests
export const removeQuote = quoteId => {
    return {
      type: 'REMOVE_QUOTE',
    //   quote: Object.assign({}, quoteId, { votes: 0 })
        quote: Object.assign({}, quoteId, { votes: 0 }.delete)
        //  use a filter here. 

    }
  }
  
  export const upvoteQuote = quoteId => {
    return {
        type: 'UPVOTE_QUOTE',
        quote: Object.assign({}, quoteId, { votes: 0 + 1})
  
    }
  }
  
  export const downvoteQuote = quoteId => {
      return {
        type: 'DOWNVOTE_QUOTE',
        quote: Object.assign({}, quoteId, { votes: 0 - 1 })
  
    }
  }

  export const addQuote = quote => {
    return {
      type: 'ADD_QUOTE',
      quote: Object.assign({}, quote, { votes: 0 })
    }
      
     
  }
//  Notificati  Create all the actions.
// export const removeQuote
  



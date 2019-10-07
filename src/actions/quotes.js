// TODO: Create action creators as defined in tests

export const addQuote = (quote) => {    //pass in quote object from QuoteForm
   return { 
     type: 'ADD_QUOTE',
     //quote: Object.assign({}, quote, {votes: 0})
     quote: {...quote, votes: 0}   //use spread operator to copy the properties of the quote that
                                  //is passed in & then set votes: to 0 in the copy
   }                              //does the same as object.assign but looks cleaner
  }

  export const removeQuote = (quoteId) => {  //pass in quoteId from QuoteCard
    return {
      type: 'REMOVE_QUOTE',
      quoteId
    }
  }

  export const upvoteQuote = (quoteId) => {   //pass in quoteId from QuoteCard
    return {
      type: 'UPVOTE_QUOTE',
      quoteId
    }
  }

  export const downvoteQuote = (quoteId) => {   //pass in quoteId from QuoteCard
    return {
      type: 'DOWNVOTE_QUOTE',
      quoteId
    }
  }
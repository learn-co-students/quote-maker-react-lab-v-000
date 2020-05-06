// import uuid from 'uuid';

export default (state = [], action) => {
  let quotes
  let quote
  switch (action.type) {
    case 'ADD_QUOTE':
      console.log('add quote', action.quote)
      return [ ...state, action.quote ]
  
    case 'REMOVE_QUOTE':
      console.log('delete quote', action.quoteId)
      return state.filter(quote => quote.id !== action.quoteId) 
    
    case 'UPVOTE_QUOTE':
      console.log('upvote quote', action.quoteId)
      quotes = [ ...state ]
      quote = quotes.find(quote => quote.id === action.quoteId)
      quote.votes += 1
      return quotes
      
    case 'DOWNVOTE_QUOTE':
      console.log('downvote quote', action.quoteId)
      quotes = [ ...state ]
      quote = quotes.find(quote => quote.id === action.quoteId)
      quote.votes = quote.votes > 0 ? quote.votes -= 1 : quote.votes
      return quotes
    
    default:
      return state;
  }
}

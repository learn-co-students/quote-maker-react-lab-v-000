export default (state = [], action) => {
  let quotes
  let quote
  let idx
  
  switch (action.type) {
    case 'ADD_QUOTE':
      console.log('add quote', action.quote)
      return [ ...state, action.quote ]
  
    case 'REMOVE_QUOTE':
      console.log('delete quote', action.quoteId)
      return state.filter(quote => quote.id !== action.quoteId) 
    
    case 'UPVOTE_QUOTE':
      console.log('upvote quote', action)
      // quotes = [ ...state ]
      // quote = quotes.find(quote => quote.id === action.quoteId)
      // quote.votes += 1
      idx = state.findIndex(quote => quote.id === action.quoteId )
      quote = state.find(quote => quote.id === action.quoteId )
      console.log(quote)
      return [...state.slice(0, idx), { ...quote, votes: quote.votes += 1 }, ...state.slice(idx + 1) ]
      
      case 'DOWNVOTE_QUOTE':
        idx = state.findIndex(quote => quote.id === action.quoteId )
        quote = state.find(quote => quote.id === action.quoteId )
        let { votes } = quote
        console.log('downvote quote', action.quoteId)
        // quotes = [ ...state ]
        // quote = quotes.find(quote => quote.id === action.quoteId)
        votes = votes > 0 ? votes -= 1 : votes
      return [...state.slice(0, idx), { ...quote, votes: votes }, ...state.slice(idx + 1) ]
    
    default:
      return state;
  }
}

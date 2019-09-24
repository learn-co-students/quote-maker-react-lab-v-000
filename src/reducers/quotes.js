export default function manageQuotes(state = [], action) {
  let idx; 
  let quote; 
  let new_quote; 
  switch (action.type) {
    case 'ADD_QUOTE': 
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    
    case 'UPVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId);
      new_quote = {...quote, votes: quote.votes + 1}; 
      return [new_quote]; 

    case 'DOWNVOTE_QUOTE':
      quote = state.find(quote => quote.id === action.quoteId);
      if (quote.votes > 1){
        new_quote = {...quote, votes: quote.votes - 1}; 
      } else {
        new_quote = quote; 
      }
      return [new_quote]; 
    
    default:
      return state;
  }
}
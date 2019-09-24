export default function manageQuotes(state = [], action) {
  let idx; 
  switch (action.type) {
    case 'ADD_QUOTE': 
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    
    case 'UPVOTE_QUOTE':
      let quote = state.find(quote => quote.id === action.quoteId);
      idx = state.findIndex(quote => quote.id === action.quoteId);
      let new_quote = {...quote, votes: quote.votes + 1}; 
      let quotes = [...state.slice(0, idx), ...state.slice(idx + 1)];
      return quotes.push(new_quote); 
    
    default:
      return state;
  }
}
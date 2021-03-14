export default (state = [], action) => {

  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote);

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);
        
    case 'UPVOTE_QUOTE':
      const quotes = [...state];
        
      quotes.forEach(quote => {
        if (quote.id === action.quoteId) {
          quote.votes = quote.votes + 1;
        }
      })

      return quotes;
     
      case 'DOWNVOTE_QUOTE':
        const quotes = [...state];
        
        quotes.forEach(quote => {
          if (quote.id === action.quoteId) {
            quote.votes = quote.votes - 1;
          }
        })
        return quotes;

      default:
        return state;
  }
 }
